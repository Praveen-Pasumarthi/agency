# =============================================================================
# create-client.ps1 — Scaffold a new client project from a template
# =============================================================================
# Usage: .\scripts\create-client.ps1 -Template <template> -Name <client-name> [-Color <brand-color>]
#
# Examples:
#   .\scripts\create-client.ps1 -Template restaurant -Name "The MG Grand" -Color "#c8a97e"
#   .\scripts\create-client.ps1 -Template gym -Name "Impact Fitness" -Color "#e63946"
#   .\scripts\create-client.ps1 -Template cafe -Name "Brew House" -Color "#d97706"
#
# Available templates: restaurant, gym, cafe, gamezone, kidsplay, primaryschool, hospital
# =============================================================================

param(
  [Parameter(Mandatory=$true)]
  [string]$Template,

  [Parameter(Mandatory=$true)]
  [string]$Name,

  [string]$Color = "#c8a97e"
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$TemplateDir = Join-Path $RepoRoot "templates\$Template"
$ClientSlug = $Name.ToLower() -replace ' ', '-'
$ClientDir = Join-Path $RepoRoot "clients\$ClientSlug"

# --- Validation ---
if (-not (Test-Path $TemplateDir)) {
  Write-Host "Error: Template '$Template' not found at $TemplateDir" -ForegroundColor Red
  Write-Host "Available templates: restaurant, gym, cafe, gamezone, kidsplay, primaryschool, hospital"
  exit 1
}

if (Test-Path $ClientDir) {
  Write-Host "Error: Client directory already exists: $ClientDir" -ForegroundColor Red
  Write-Host "Choose a different name or remove the existing directory."
  exit 1
}

# --- Copy template ---
Write-Host "Copying template: $Template -> $Name" -ForegroundColor Cyan
Copy-Item -Path $TemplateDir -Destination $ClientDir -Recurse

# --- Derive brand color dark variant ---
$ColorHex = $Color -replace '#', ''
$R = [Convert]::ToInt32($ColorHex.Substring(0, 2), 16)
$G = [Convert]::ToInt32($ColorHex.Substring(2, 2), 16)
$B = [Convert]::ToInt32($ColorHex.Substring(4, 2), 16)
$Rd = [Math]::Floor($R * 0.85)
$Gd = [Math]::Floor($G * 0.85)
$Bd = [Math]::Floor($B * 0.85)
$ToHex = { param($v) $h = [Convert]::ToString($v, 16); if ($h.Length -eq 1) { "0$h" } else { $h } }
$BrandDark = "#" + (& $ToHex $Rd) + (& $ToHex $Gd) + (& $ToHex $Bd)

# --- Replace brand color in index.css ---
Write-Host "Applying brand color: $Color" -ForegroundColor Cyan
$CssFile = Join-Path $ClientDir "src\index.css"
if (Test-Path $CssFile) {
  $CssContent = Get-Content $CssFile -Raw
  $CurrentColor = [regex]::Match($CssContent, '--color-brand:\s*(#[0-9a-fA-F]{6})').Groups[1].Value
  $CurrentDark = [regex]::Match($CssContent, '--color-brand-dark:\s*(#[0-9a-fA-F]{6})').Groups[1].Value

  if ($CurrentColor) {
    $CssContent = $CssContent.Replace($CurrentColor, $Color)
  }
  if ($CurrentDark) {
    $CssContent = $CssContent.Replace($CurrentDark, $BrandDark)
  }
  Set-Content -Path $CssFile -Value $CssContent -NoNewline
}

# --- Replace business name in index.html ---
Write-Host "Setting business name: $Name" -ForegroundColor Cyan
$HtmlFile = Join-Path $ClientDir "index.html"
if (Test-Path $HtmlFile) {
  $HtmlContent = Get-Content $HtmlFile -Raw
  # Replace title (text before " | ")
  $TitleMatch = [regex]::Match($HtmlContent, '<title>([^|]+)\|')
  if ($TitleMatch.Success) {
    $OldTitle = $TitleMatch.Groups[1].Value.Trim()
    $HtmlContent = $HtmlContent.Replace($OldTitle, $Name)
  }
  # Replace only the meta description content (not viewport)
  $DescMatch = [regex]::Match($HtmlContent, 'name="description"\s+content="([^"]+?)"')
  if ($DescMatch.Success) {
    $OldDesc = $DescMatch.Groups[1].Value
    # Extract the business name part (before " - ")
    $DescNameMatch = [regex]::Match($OldDesc, '^([^-]+)\s*-')
    if ($DescNameMatch.Success) {
      $OldDescName = $DescNameMatch.Groups[1].Value.Trim()
      $NewDesc = $OldDesc.Replace($OldDescName, $Name)
      $HtmlContent = $HtmlContent.Replace($OldDesc, $NewDesc)
    }
  }
  Set-Content -Path $HtmlFile -Value $HtmlContent -NoNewline
}

# --- Clean up ---
Write-Host "Cleaning up template artifacts..." -ForegroundColor Cyan
$NmPath = Join-Path $ClientDir "node_modules"
$LockPath = Join-Path $ClientDir "package-lock.json"
if (Test-Path $NmPath) { Remove-Item -Path $NmPath -Recurse -Force }
if (Test-Path $LockPath) { Remove-Item -Path $LockPath -Force }

# --- Install dependencies ---
Write-Host "Installing dependencies..." -ForegroundColor Cyan
Push-Location $ClientDir
npm install --silent 2>$null
Pop-Location

# --- Done ---
Write-Host ""
Write-Host "Client project created: $ClientDir" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Update FormSubmit email in component files (search for 'yourgmail@gmail.com')"
Write-Host "  2. Customize business details (phone, address, menu/items) in components"
Write-Host "  3. Run 'npm run dev' to preview"
Write-Host "  4. Run 'npm run build' when ready to deploy"
Write-Host ""

#!/bin/bash
set -e

# =============================================================================
# create-client.sh — Scaffold a new client project from a template
# =============================================================================
# Usage: ./scripts/create-client.sh <template> <client-name> <brand-color>
#
# Examples:
#   ./scripts/create-client.sh restaurant "The MG Grand" "#c8a97e"
#   ./scripts/create-client.sh gym "Impact Fitness" "#e63946"
#   ./scripts/create-client.sh cafe "Brew House" "#d97706"
#
# Available templates: restaurant, gym, cafe, gamezone, kidsplay, primaryschool, hospital
# =============================================================================

TEMPLATE="${1}"
CLIENT_NAME="${2}"
BRAND_COLOR="${3:-#c8a97e}"

# --- Validation ---
if [ -z "$TEMPLATE" ] || [ -z "$CLIENT_NAME" ]; then
  echo "Usage: $0 <template> <client-name> [brand-color]"
  echo ""
  echo "Templates: restaurant, gym, cafe, gamezone, kidsplay, primaryschool, hospital"
  echo "Example:  $0 restaurant \"The MG Grand\" \"#c8a97e\""
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
TEMPLATE_DIR="$REPO_ROOT/templates/$TEMPLATE"
CLIENT_DIR="$REPO_ROOT/clients/$(echo "$CLIENT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"

if [ ! -d "$TEMPLATE_DIR" ]; then
  echo "Error: Template '$TEMPLATE' not found at $TEMPLATE_DIR"
  echo "Available templates: restaurant, gym, cafe, gamezone, kidsplay, primaryschool, hospital"
  exit 1
fi

if [ -d "$CLIENT_DIR" ]; then
  echo "Error: Client directory already exists: $CLIENT_DIR"
  echo "Choose a different name or remove the existing directory."
  exit 1
fi

# --- Copy template ---
echo "📦 Copying template: $TEMPLATE → $CLIENT_NAME"
cp -r "$TEMPLATE_DIR" "$CLIENT_DIR"

# --- Derive values ---
CLIENT_SLUG=$(echo "$CLIENT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
# Lighten brand color for --color-brand-dark (simple heuristic: darken by shifting hex)
BRAND_DARK=$(echo "$BRAND_COLOR" | sed 's/#//' | awk '{
  r = strtonum("0x" substr($0,1,2))
  g = strtonum("0x" substr($0,3,2))
  b = strtonum("0x" substr($0,5,2))
  r = int(r * 0.85); g = int(g * 0.85); b = int(b * 0.85)
  printf "#%02x%02x%02x", r, g, b
}')

# --- Replace brand color in index.css ---
echo "🎨 Applying brand color: $BRAND_COLOR"
CSS_FILE="$CLIENT_DIR/src/index.css"
if [ -f "$CSS_FILE" ]; then
  # Get current brand color from the file
  CURRENT_COLOR=$(grep -oP '--color-brand: \K[^;]+' "$CSS_FILE" || echo "#c8a97e")
  CURRENT_DARK=$(grep -oP '--color-brand-dark: \K[^;]+' "$CSS_FILE" || echo "#b8956a")

  sed -i "s|$CURRENT_COLOR|$BRAND_COLOR|g" "$CSS_FILE"
  sed -i "s|$CURRENT_DARK|$BRAND_DARK|g" "$CSS_FILE"
fi

# --- Replace business name in key files ---
echo "📝 Setting business name: $CLIENT_NAME"

# index.html — title and meta description
HTML_FILE="$CLIENT_DIR/index.html"
if [ -f "$HTML_FILE" ]; then
  # Extract current template name from title (text before " | ")
  CURRENT_TITLE=$(grep -oP '<title>\K[^|]+' "$HTML_FILE" | sed 's/ *$//')
  if [ -n "$CURRENT_TITLE" ]; then
    sed -i "s|$CURRENT_TITLE|$CLIENT_NAME|g" "$HTML_FILE"
  fi
fi

# --- Replace FormSubmit email placeholder ---
echo "📧 FormSubmit email: yourgmail@gmail.com (update per client in component files)"

# --- Clean up node_modules and lock files ---
echo "🧹 Cleaning up template artifacts..."
rm -rf "$CLIENT_DIR/node_modules"
rm -f "$CLIENT_DIR/package-lock.json"

# --- Install dependencies ---
echo "📥 Installing dependencies..."
cd "$CLIENT_DIR"
npm install --silent 2>/dev/null

# --- Done ---
echo ""
echo "✅ Client project created: $CLIENT_DIR"
echo ""
echo "Next steps:"
echo "  1. Update FormSubmit email in component files (search for 'yourgmail@gmail.com')"
echo "  2. Customize business details (phone, address, menu/items) in components"
echo "  3. Run 'npm run dev' to preview"
echo "  4. Run 'npm run build' when ready to deploy"
echo ""

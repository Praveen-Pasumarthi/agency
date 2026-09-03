// =========================================================
// MOBILE NAVIGATION MENU
// =========================================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        const isOpen = mobileMenu.classList.contains("active");
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });
}

if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        if (menuButton) {
            menuButton.setAttribute("aria-label", "Open menu");
        }
    });
}

if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            if (menuButton) {
                menuButton.setAttribute("aria-label", "Open menu");
            }
        });
    });
}


// =========================================================
// DYNAMIC FIXED NAVBAR & SCROLL SPY
// =========================================================

(function initDynamicNavbar() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const navLinks = nav.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");

    function updateNavbar() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        // Toggle frosted glass scrolled state
        if (scrollPos > 30) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        // Active Section Scroll Spy
        if (sections.length > 0 && navLinks.length > 0) {
            let currentId = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentId = section.getAttribute("id");
                }
            });

            if (currentId) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        }
    }

    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();
})();


// =========================================================
// THEME MATCHING SCROLLBAR (DRAGGABLE & AUTO-HIDING)
// =========================================================

(function initCustomScrollbar() {
    // Create scrollbar elements
    const track = document.createElement("div");
    track.className = "custom-scrollbar-track";
    track.setAttribute("aria-hidden", "true");

    const thumb = document.createElement("div");
    thumb.className = "custom-scrollbar-thumb";
    track.appendChild(thumb);
    document.body.appendChild(track);

    let hideTimeout;
    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    function getTrackBounds() {
        const clientHeight = window.innerHeight;
        const availableTrackHeight = clientHeight - 12; // 6px padding top & bottom
        return { clientHeight, availableTrackHeight };
    }

    function updateScrollbar() {
        const scrollHeight = document.documentElement.scrollHeight;
        const { clientHeight, availableTrackHeight } = getTrackBounds();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // If page is not scrollable, hide track
        if (scrollHeight <= clientHeight + 5) {
            track.style.display = "none";
            return;
        } else {
            track.style.display = "block";
        }

        const thumbHeight = Math.max(40, (clientHeight / scrollHeight) * availableTrackHeight);
        thumb.style.height = `${thumbHeight}px`;

        const maxScroll = scrollHeight - clientHeight;
        const scrollRatio = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const maxThumbY = availableTrackHeight - thumbHeight;
        const thumbY = scrollRatio * maxThumbY;

        thumb.style.transform = `translateY(${thumbY}px)`;
    }

    function showScrollbar() {
        track.classList.add("visible");
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            if (!isDragging) {
                track.classList.remove("visible");
            }
        }, 1100);
    }

    // Scroll & Resize listeners
    window.addEventListener("scroll", () => {
        updateScrollbar();
        showScrollbar();
    }, { passive: true });

    window.addEventListener("resize", updateScrollbar);

    // Show when hovering near the right edge of viewport
    window.addEventListener("mousemove", (e) => {
        if (e.clientX >= window.innerWidth - 30) {
            showScrollbar();
        }

        if (!isDragging) return;

        const deltaY = e.clientY - startY;
        const scrollHeight = document.documentElement.scrollHeight;
        const { clientHeight, availableTrackHeight } = getTrackBounds();
        const thumbHeight = parseFloat(thumb.style.height) || 40;
        const maxThumbY = availableTrackHeight - thumbHeight;
        const maxScroll = scrollHeight - clientHeight;

        if (maxThumbY > 0) {
            const scrollDelta = (deltaY / maxThumbY) * maxScroll;
            const targetY = Math.max(0, Math.min(maxScroll, startScrollTop + scrollDelta));
            window.scrollTo({ top: targetY, behavior: "instant" });
        }
    });

    // Start Dragging on Thumb
    thumb.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.clientY;
        startScrollTop = window.scrollY || document.documentElement.scrollTop;
        track.classList.add("dragging", "visible");
        document.body.classList.add("scrollbar-dragging");
        clearTimeout(hideTimeout);
        e.preventDefault();
        e.stopPropagation();
    });

    // Click on Track (outside Thumb) to Jump
    track.addEventListener("mousedown", (e) => {
        if (e.target === thumb) return;
        const clickY = e.clientY;
        const scrollHeight = document.documentElement.scrollHeight;
        const { clientHeight, availableTrackHeight } = getTrackBounds();
        const thumbHeight = parseFloat(thumb.style.height) || 40;
        const maxThumbY = availableTrackHeight - thumbHeight;
        const maxScroll = scrollHeight - clientHeight;

        if (maxThumbY > 0) {
            const targetThumbY = Math.max(0, Math.min(maxThumbY, clickY - (thumbHeight / 2) - 6));
            const targetScroll = (targetThumbY / maxThumbY) * maxScroll;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
        }
    });

    // End Dragging
    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            track.classList.remove("dragging");
            document.body.classList.remove("scrollbar-dragging");
            showScrollbar();
        }
    });

    // Initial update
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateScrollbar);
    } else {
        updateScrollbar();
    }
})();

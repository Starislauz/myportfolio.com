/* ==========================================================================
   Anthony Njoku — portfolio behaviour
   Vanilla JavaScript. No jQuery, no Bootstrap, no build step.
   --------------------------------------------------------------------------
   01. Helpers
   02. Sticky top bar
   03. Mobile navigation
   04. Scroll spy
   05. Reveal on scroll
   06. Animated counters
   07. Project filtering
   08. Footer year
   ========================================================================== */

(function () {
    'use strict';

    /* ======================================================================
       01. Helpers
       ====================================================================== */

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function $(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    function $$(selector, scope) {
        return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
    }

    var supportsObserver = 'IntersectionObserver' in window;

    /* ======================================================================
       02. Sticky top bar
       Adds a border + solid background once the page has moved.
       ====================================================================== */

    var topbar = $('#topbar');

    if (topbar) {
        var setScrolledState = function () {
            topbar.classList.toggle('is-scrolled', window.scrollY > 8);
        };

        setScrolledState();
        window.addEventListener('scroll', setScrolledState, { passive: true });
    }

    /* ======================================================================
       03. Mobile navigation
       ====================================================================== */

    var navToggle = $('#navToggle');
    var siteNav = $('#siteNav');

    function closeNav() {
        if (!topbar || !navToggle) return;
        topbar.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
    }

    function openNav() {
        if (!topbar || !navToggle) return;
        topbar.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close navigation menu');
    }

    if (navToggle && topbar) {
        navToggle.addEventListener('click', function () {
            if (topbar.classList.contains('is-open')) {
                closeNav();
            } else {
                openNav();
            }
        });

        // Tapping a link should dismiss the panel.
        if (siteNav) {
            siteNav.addEventListener('click', function (event) {
                if (event.target.closest('a')) closeNav();
            });
        }

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeNav();
        });

        document.addEventListener('click', function (event) {
            if (topbar.classList.contains('is-open') && !topbar.contains(event.target)) closeNav();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 960) closeNav();
        });
    }

    /* ======================================================================
       04. Scroll spy
       Highlights the nav link for whichever section owns the middle band
       of the viewport.
       ====================================================================== */

    var navLinks = $$('.nav__link');

    if (navLinks.length && supportsObserver) {
        var spySections = navLinks
            .map(function (link) {
                var id = link.getAttribute('href');
                return id && id.charAt(0) === '#' ? document.getElementById(id.slice(1)) : null;
            })
            .filter(Boolean);

        var setActiveLink = function (id) {
            navLinks.forEach(function (link) {
                link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
            });
        };

        var spy = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) setActiveLink(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );

        spySections.forEach(function (section) {
            spy.observe(section);
        });
    }

    /* ======================================================================
       05. Reveal on scroll
       Staggers siblings so grids cascade instead of popping in together.
       ====================================================================== */

    var revealTargets = $$('[data-reveal]');

    if (revealTargets.length) {
        if (!supportsObserver || reduceMotion) {
            revealTargets.forEach(function (el) {
                el.classList.add('is-visible');
            });
        } else {
            var reveal = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('is-visible');
                        reveal.unobserve(entry.target);
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
            );

            revealTargets.forEach(function (el) {
                var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
                el.style.transitionDelay = Math.min(siblings, 5) * 70 + 'ms';
                reveal.observe(el);
            });
        }
    }

    /* ======================================================================
       06. Animated counters
       ====================================================================== */

    var counters = $$('[data-count-to]');

    if (counters.length) {
        var runCounters = function () {
            counters.forEach(function (el) {
                var target = parseInt(el.getAttribute('data-count-to'), 10);
                if (isNaN(target)) return;

                if (reduceMotion) {
                    el.textContent = target.toLocaleString();
                    return;
                }

                var duration = 1400;
                var start = null;

                var step = function (timestamp) {
                    if (start === null) start = timestamp;
                    var progress = Math.min((timestamp - start) / duration, 1);
                    // easeOutCubic
                    var eased = 1 - Math.pow(1 - progress, 3);

                    el.textContent = Math.round(target * eased).toLocaleString();

                    if (progress < 1) window.requestAnimationFrame(step);
                };

                window.requestAnimationFrame(step);
            });
        };

        if (!supportsObserver) {
            runCounters();
        } else {
            var metrics = $('.metrics');

            if (metrics) {
                var metricsObserver = new IntersectionObserver(
                    function (entries) {
                        entries.forEach(function (entry) {
                            if (!entry.isIntersecting) return;
                            runCounters();
                            metricsObserver.disconnect();
                        });
                    },
                    { threshold: 0.4 }
                );

                metricsObserver.observe(metrics);
            }
        }
    }

    /* ======================================================================
       07. Project filtering
       ====================================================================== */

    var filterButtons = $$('.filter');
    var projectCards = $$('.project');
    var filterCount = $('#filterCount');
    var emptyState = $('#emptyState');

    if (filterButtons.length && projectCards.length) {
        var applyFilter = function (filter) {
            var shown = 0;

            projectCards.forEach(function (card) {
                var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
                var match = filter === 'all' || tags.indexOf(filter) !== -1;

                card.hidden = !match;

                if (match) {
                    shown += 1;
                    // Cards revealed before filtering stay visible; cards that were
                    // hidden may never have been observed, so force them visible.
                    card.classList.add('is-visible');
                }
            });

            if (filterCount) {
                filterCount.textContent = shown + (shown === 1 ? ' project' : ' projects');
            }

            if (emptyState) emptyState.hidden = shown !== 0;
        };

        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var filter = button.getAttribute('data-filter') || 'all';

                filterButtons.forEach(function (other) {
                    var isCurrent = other === button;
                    other.classList.toggle('is-active', isCurrent);
                    other.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
                });

                applyFilter(filter);
            });
        });
    }

    /* ======================================================================
       08. Footer year
       ====================================================================== */

    var year = $('#year');

    if (year) year.textContent = new Date().getFullYear();
})();

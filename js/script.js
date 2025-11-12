/* Enhanced Count Animation */
function count(els) {
	els.each(function () {
		$(this)
			.prop('Counter', 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 2500,
					easing: 'easeOutCubic',
					step: function (now) {
						$(this).text(Math.ceil(now).toLocaleString());
					},
				}
			);
	});
}
/* Count when the counter section is in viewport */
const counterEls = $('.counter .counter__count');
new Waypoint({
	element: counterEls,

	handler: function () {
		count(counterEls);

		this.destroy();
	},

	offset: 'bottom-in-view',
});

/* Make navbar fixed when scrolled down and hide it when scrolled up */
const navbar = $('.navbar-top');
let previousScroll = 0;
$(window).on('scroll', function (event) {
	let currentScroll = $(window).scrollTop(); //Distance scrolled down the page
	let navHeight = $(navbar).height(); //Height of navbar
	if (currentScroll > 10) {
		$('.navbar-top').addClass('navbar-top--scrolled');
	} else {
		$('.navbar-top').removeClass('navbar-top--scrolled');
	}

	//When scrolling down AND you've scrolled past navHeight * 2.25, add .scrollUp
	if (currentScroll > previousScroll && currentScroll > navHeight * 2.25) {
		$(navbar).addClass('scrollUp');
		//When scrolling up AND you've scrolled less than navHeight, remove .scrollUp
	} else if (previousScroll > currentScroll && !(currentScroll <= navHeight)) {
		$(navbar).removeClass('scrollUp');
	}
	previousScroll = currentScroll;
});

/* Add navbar background color when it is not collapsed */
$('#navbarTopCollapsible').on('show.bs.collapse', function () {
	$('.navbar-top').addClass('bg-dark-trans');
});
$('#navbarTopCollapsible').on('hide.bs.collapse', function () {
	$('.navbar-top').removeClass('bg-dark-trans');
});


// Enhanced Form Submission (if form exists)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let formData = new FormData(this);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "send_mail.php", true);

        xhr.onload = function() {
            let responseDiv = document.getElementById("responseMessage");
            if (xhr.status === 200) {
                responseDiv.innerHTML = `<div style="color: green; padding: 15px; background: #d4edda; border-radius: 8px; margin-top: 15px;">✅ Message sent successfully!</div>`;
                contactForm.reset();
            } else {
                responseDiv.innerHTML = `<div style="color: red; padding: 15px; background: #f8d7da; border-radius: 8px; margin-top: 15px;">❌ Message could not be sent.</div>`;
            }
        };

        xhr.send(formData);
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar-top').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Loading animation
window.addEventListener('load', function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);
    }
});

// Add parallax effect to header
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


// ==========================================
// IVORY PALACE HOTEL
// JAVASCRIPT PART 1
// Sticky Header, Mobile Menu & Scroll Button
// ==========================================

// Select Elements

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";

    } else {

        header.style.padding = "20px 8%";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";

    }

});

// ===============================
// Mobile Menu
// ===============================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// ===============================
// Scroll To Top Button
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Hide Scroll Button on Page Load

scrollTopBtn.style.display = "none";

 // ==========================================
// JAVASCRIPT PART 2
// BOOKING FORM VALIDATION
// ==========================================

const bookingForm = document.querySelector(".booking-form");

const checkIn = document.getElementById("checkin");
const checkOut = document.getElementById("checkout");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!checkIn.value || !checkOut.value) {

        alert("Please select your check-in and check-out dates.");

        return;

    }

    const checkInDate = new Date(checkIn.value);
    const checkOutDate = new Date(checkOut.value);

    if (checkOutDate <= checkInDate) {

        alert("Check-out date must be after the check-in date.");

        return;

    }

    const adults =
        document.getElementById("adults").value;

    const children =
        document.getElementById("children").value;

    const room =
        document.getElementById("room").value;

    alert(

`Booking Request Submitted Successfully!

Room: ${room}

Guests:
${adults}
${children}

Check-In:
${checkIn.value}

Check-Out:
${checkOut.value}

Thank you for choosing Ivory Palace Hotel.
Our reservations team will contact you shortly.`

    );

    bookingForm.reset();

});

// ==========================================
// JAVASCRIPT PART 3
// FAQ ACCORDION & NEWSLETTER
// ==========================================

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const icon = question.querySelector("i");

        // Close all other FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== faqItem) {

                item.querySelector(".faq-answer").style.maxHeight = null;
                item.querySelector("i").classList.remove("fa-minus");
                item.querySelector("i").classList.add("fa-plus");

            }

        });

        // Toggle current FAQ
        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});

// Newsletter Form

const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = newsletterForm.querySelector("input").value.trim();

    if (email === "") {

        alert("Please enter your email address.");

        return;

    }

    alert(
        "Thank you for subscribing to the Ivory Palace Hotel newsletter!"
    );

    newsletterForm.reset();

});


// ==========================================
// JAVASCRIPT PART 4
// SMOOTH SCROLL & GALLERY
// ==========================================

// Smooth Scrolling for Navigation Links

const navLinks = document.querySelectorAll(
    '.nav-links a, .book-btn, .primary-btn, .secondary-btn, .room-btn, .service-btn'
);

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#") && target !== "#") {

            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {

                section.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        }

    });

});

// ===============================
// Gallery Image Click Effect
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const imageWindow = window.open("", "_blank");

        imageWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ivory Palace Hotel Gallery</title>
                <style>
                    body{
                        margin:0;
                        background:#111;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100vh;
                    }

                    img{
                        max-width:95%;
                        max-height:95%;
                        border-radius:15px;
                        box-shadow:0 10px 30px rgba(255,255,255,.2);
                    }
                </style>
            </head>
            <body>
                <img src="${image.src}" alt="Gallery Image">
            </body>
            </html>
        `);

    });

});

// ==========================================
// JAVASCRIPT PART 5
// COUNTER ANIMATION & SCROLL EFFECTS
// ==========================================

// ===============================
// Animated Statistics Counter
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".statistics");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach((counter) => {

            const text = counter.innerText;
            const target = parseInt(text.replace(/\D/g, ""));

            let count = 0;

            const increment = Math.ceil(target / 100);

            const timer = setInterval(() => {

                count += increment;

                if (count >= target) {

                    counter.innerText = text;
                    clearInterval(timer);

                } else {

                    if (text.includes("K")) {

                        counter.innerText =
                            (count / 1000).toFixed(1).replace(".0", "") + "K+";

                    } else if (text.includes("+")) {

                        counter.innerText = count + "+";

                    } else {

                        counter.innerText = count;

                    }

                }

            }, 20);

        });

    }

}

window.addEventListener("scroll", startCounters);

// ===============================
// Fade In Sections on Scroll
// ===============================

const animatedElements = document.querySelectorAll(

    ".about, .amenities, .rooms, .services, .gallery, .testimonials, .statistics, .faq, .newsletter, .contact"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {

        threshold: 0.15

    }

);

animatedElements.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ==========================================
// JAVASCRIPT PART 6
// FINAL POLISH
// ==========================================

// Mobile Navigation

const mobileMenu = document.querySelector(".menu-btn");
const mobileNavbar = document.querySelector(".navbar");

mobileMenu.addEventListener("click", () => {

    mobileNavbar.classList.toggle("active");

});

// Close Mobile Menu After Clicking a Link

const mobileLinks = document.querySelectorAll(".nav-links a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileNavbar.classList.remove("active");

    });

});

// Active Navigation Link

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    mobileLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Console Welcome Message

console.log(
    "%cWelcome to Ivory Palace Hotel",
    "color:#C9A227;font-size:20px;font-weight:bold;"
);

console.log(
    "%cDesigned and Developed by Olahanloye Wasiu",
    "color:#2E2E2E;font-size:14px;"
);



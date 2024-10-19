let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

const menuItem = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const progress_skill = document.querySelectorAll('#soft-skills .progress');


// var softSkill_item = document.querySelectorAll(".soft-skills_items");
var softSkill = document.getElementById('soft-skills');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    menuItem.forEach(a => {
        a.classList.remove('activeNAV');
        if (a.classList.contains(current)) {
            a.classList.add('activeNAV');
        }
    })

    if (current == "soft-skills") {
        softSkill.classList.add('active');
    }
})
console.log(document.querySelector('.soft-skills.active'));





function activeItemNav() {
    menuItem.forEach((item) =>
        item.classList.remove('activeNAV'));
    this.classList.add('activeNAV');
}


menuItem.forEach((item) =>
    item.addEventListener('click', activeItemNav));

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


// pic
$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        dots: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                dots: true,

            },
        },],
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

// lable
const labels = document.querySelectorAll('.form__control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms"> ${letter} </span>`)
        .join('')
})


// checkbox dark mode
var checkboxDarkMode = document.getElementById('checkbox');
// console.log(checkboxDarkMode);
checkboxDarkMode.addEventListener('click', () => {
    if (checkboxDarkMode.checked == true) {
        document.body.classList.add("dark_theme");


        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856379/My-portfolio/logo__white_optimized_eb5pqt.png"

        // clound
        document.querySelector('.clound').innerHTML = `<img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852065/My-portfolio/clound-moon-left_jaocus_optimized_dmjzjr.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852066/My-portfolio/clound-moon_peb6rn_optimized_hzeqz3.png" alt="">`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652851267/My-portfolio/me_attdm8_jjqfny_optimized_isuewp.png" alt="" class="front-img">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845805/My-portfolio/dc1-dark_optimized_etjlg4.png" alt="" class="dc1">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc2">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc3">`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458965/My-portfolio/picVAP-dark_qeqodg.png";

        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img_about_ucs7pd_optimized_rjusfe.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png";

        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652450175/My-portfolio/project-dark_uq99k2.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458479/My-portfolio/bg_fav_cover-dark_q0xovc.png";

    }
    else if (checkboxDarkMode.checked == false) {
        document.body.classList.remove("dark_theme");

        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856363/My-portfolio/logo__black_optimized_mzimiv.png"

        // clound
        document.querySelector('.clound').innerHTML = `  <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-left_optimized_xjoubm.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-right_optimized_riwik8.png" alt="">
`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802935/My-portfolio/ava2_optimized_n9hxyi.png" alt="" class="front-img">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300890/My-portfolio/dc1_stlq7p.png" alt="" class="dc1">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc2">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc3">
`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300903/My-portfolio/picVAP_m0q8ij.png";

        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img__infor_optimized_optimized_optimized_iqzszn.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png";


        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300902/My-portfolio/project_border_ofqone.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856357/My-portfolio/bg_fav_cover_optimized_z38zzf.png";

    }
})



// var btnOpen = document.querySelector('.open-modal-btn')
// var modal = document.querySelector('.modal')
// var inconClose =document.querySelector('.modal__header i')
// var btnClose =document.querySelector('.modal__footer button')
// function toggleModal(){
//     modal.classList.toggle('hide')
// }
// btnOpen.addEventListener('click',toggleModal)
// btnClose.addEventListener('click',toggleModal)
// inconClose.addEventListener('click',toggleModal)
// modal.addEventListener('click',toggleModal)


// Mở modal cụ thể khi nhấn vào nút "Xem chi tiết"
document.querySelectorAll('.open-modal-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.querySelector(`.my_modal[data-modal="${modalId}"]`).classList.remove('hidden');
    });
});

// Đóng modal cụ thể khi nhấn vào nút Close hoặc icon X
document.querySelectorAll('.close-modal').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        const modal = this.closest('.my_modal');
        modal.classList.add('hidden');
    });
});

// Đóng modal khi bấm vào overlay (bên ngoài modal__inner)
document.querySelectorAll('.my_modal').forEach(function (modal) {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

  let currentSlide = 0;
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);

    document.querySelector('.close-modal-btn').addEventListener('click', function() {
        // Logic to close the modal
        document.querySelector('.modal__inner').style.display = 'none';
    });

    // Initial display of first slide
    showSlide(currentSlide);






// soft skill


// end soft skill

// contact

// end contact
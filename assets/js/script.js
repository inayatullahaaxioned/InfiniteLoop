/* Author: 
Inayatullah
*/
"use strict"
//header sticky and background changes 
const header = document.querySelector('.header'),
  navbar = document.querySelector('.navbar'),
  hamburger = document.querySelector('.hamburger'),
  form = document.querySelector('.form'),
  fullName = document.querySelector('.name'),
  email = document.querySelector('.email'),
  message = document.querySelector('.message'),
  nameRegex = /^[a-zA-Z]+[a-zA-Z\s]+$/,
  emailRegex = /^([A-Za-z][A-Za-z0-9\-\_\.]+[A-Za-z0-9])\@([A-Za-z]{2,})\.([A-Za-z]{2,})$/,
  messageRegex = /./;

// hamburger js 
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.scrollY > header.offsetHeight + 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
})

//form validation starts here
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateInput(fullName, nameRegex);
  validateInput(email, emailRegex);
  validateInput(message, messageRegex, 10, 250);

  let errors = form.parentElement.querySelectorAll('.error');
  if (errors.length == 0) {
    const successMsg = document.createElement('div'),
      contactWrapper = document.querySelector('.contact .wrapper');
    successMsg.className = "success";
    successMsg.innerText = "Your message has been sent Successfully";
    contactWrapper.appendChild(successMsg);
    setTimeout(() => {
      successMsg.remove();
    }, 3000);
    form.reset();
  }
});

//function for validing input in form
function validateInput(input, regex = "", minLimit = "5", maxLimit = "25") {
  let error = input.parentElement.querySelector('.error');
  if (error) {
    error.remove();
  }
  if (input.value == "") {
    appendError(input, `${input.name} is required`);
  }
  else if (input.value.length < minLimit) {
    appendError(input, `atleaset ${minLimit} character is required`);
  }
  else if (input.value.length > maxLimit) {
    appendError(input, `maximum ${maxLimit} characters are allowed`);
  }
  else if (!regex.test(input.value)) {
    appendError(input, `Please enter valid ${input.name}`);
  }
}

//function for append error
function appendError(input, errorMsg) {
  const inputBox = input.parentElement;
  const errorSpan = document.createElement('span');
  errorSpan.className = "error";
  errorSpan.innerText = errorMsg;
  inputBox.appendChild(errorSpan);
}

//slider for gallery section
$('.gallery-list').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//slider for testimonial section 
$('.testimonial-list').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    }
  ]
});


//moving to section
const navItem = document.querySelectorAll('.scroll'),
      sections = document.querySelectorAll('section');

navItem.forEach(function (item) {
  let active = navbar.querySelector('.active');
  item.addEventListener('click', function(e){
    e.preventDefault();
    let sectionUrl = item.getAttribute('href');
    sections.forEach(function(section) {
      let sectionId = section.getAttribute('id');
      if(sectionId == sectionUrl.replace('#',"")){
        let sectionTop = section.getBoundingClientRect().top;
        window.scrollBy({
          top: sectionTop
        });
      };
    });
  });
});


















//***for Images Slider***///
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    
    function showSlide() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      
      slides[currentSlide].classList.add("active");
      currentSlide = (currentSlide + 1) % slides.length;
    }
    
    function startAutoplay() {
      setInterval(showSlide, 4000); 
    }
    
    startAutoplay();
  });


 
  var slides = document.querySelectorAll('.slides');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function showSlide(slideIndex) {
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  dots.forEach(function(dot) {
    dot.classList.remove('active');
  });

  dots[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

function nextSlide() {
  var nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex === slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex);
}

function previousSlide() {
  var prevSlideIndex = currentSlide - 1;
  if (prevSlideIndex < 0) {
    prevSlideIndex = slides.length - 1;
  }
  showSlide(prevSlideIndex);
}

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    showSlide(index);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });
});

// Show the first slide
showSlide(0);


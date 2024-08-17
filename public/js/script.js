const indicators = document.querySelectorAll(".indicator");
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", function () {
    currentIndex = index;
    updateCarousel();
  });
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("bg-gray-800", index === currentIndex);
    indicator.classList.toggle("bg-gray-400", index !== currentIndex);
  });
}

updateCarousel = function () {
  items.forEach((item, index) => {
    item.classList.remove("active");
    item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
  items[currentIndex].classList.add("active");
  updateIndicators();
};

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  let currentIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.style.transform = `translateX(${
        (index - currentIndex) * 100
      }%)`;
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex =
      currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});


window.addEventListener("load", () => {
    const renderTime = (performance.now() / 1000).toFixed(4); // Menghitung waktu render dalam detik
    document.getElementById("renderTimeValue").textContent = renderTime;
  });
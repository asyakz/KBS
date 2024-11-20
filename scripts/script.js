// SWIPER JS

const statisticsSwiper = new Swiper('.statistics__swiper', {

  loop: true,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // when window width is >= 1310px
    1310: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },

});

const newsSwiper = new Swiper('.news__swiper', {
  // Optional parameters
  loop: true,

  // Настройки навигации
  navigation: {
    nextEl: '.news__swiper-button-next',
    prevEl: '.news__swiper-button-prev',
  },

  // Настройки пагинации
  pagination: {
    el: '.news__swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 680px
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1310px
    1310: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

});

// TABS ADVANTAGES

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.advantages__tab-btn');
  const tabContents = document.querySelectorAll('.advantages__tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });

  function handleTabClick(event) {
    const path = event.currentTarget.dataset.path;

    tabContents.forEach(content => {
      content.classList.remove('advantages__tab-content--active');
    });

    const targetContent = document.querySelector(`[data-target="${path}"]`);
    if (targetContent) {
      targetContent.classList.add('advantages__tab-content--active');
    }
  }
});

// Активный цвет
window.addEventListener('load', function () {
  const tabButtons = document.querySelectorAll('.advantages__tab-btn');
  let activeColorElement = null;

  tabButtons.forEach(button => {
    button.addEventListener('click', handleColorClick);
  });

  function handleColorClick(event) {
    activeColorElement = document.querySelector('.advantages__tab-btn--active');
    if (activeColorElement) {
      activeColorElement.classList.remove('advantages__tab-btn--active');
    }
    event.target.classList.add('advantages__tab-btn--active');
  }
});


// TABS INFRASTRUCTURE

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons2 = document.querySelectorAll('.infrastructure__tab-btn');
  const tabContents2 = document.querySelectorAll('.infrastructure__tab-content');

  tabButtons2.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });

  function handleTabClick(event) {
    const path = event.currentTarget.dataset.path;

    tabContents2.forEach(content => {
      content.classList.remove('infrastructure__tab-content--active');
    });

    const targetContent2 = document.querySelector(`[data-target="${path}"]`);
    if (targetContent2) {
      targetContent2.classList.add('infrastructure__tab-content--active');
    }
  }
});

// Активный цвет
window.addEventListener('load', function () {
  const tabButtons2 = document.querySelectorAll('.infrastructure__tab-btn');
  let activeColorElement2 = null;

  tabButtons2.forEach(button => {
    button.addEventListener('click', handleColorClick);
  });

  function handleColorClick(event) {
    activeColorElement2 = document.querySelector('.infrastructure__tab-btn--active');
    if (activeColorElement2) {
      activeColorElement2.classList.remove('infrastructure__tab-btn--active');
    }
    event.target.classList.add('infrastructure__tab-btn--active');
  }
});

// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// SELECT-TABS ADVANTAGES

document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('advantages__mobile-tabs');
  const contentDivs = document.querySelectorAll('.advantages__mobile-tab');

  function switchTab(selectedTab) {
    contentDivs.forEach(function (content) {
      if (content.getAttribute('data-tab') === selectedTab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }

  switchTab(select.value);

  select.addEventListener('change', function () {
    switchTab(this.value);
  });
});

// SELECT-TABS INFRASTRUCTURE

document.addEventListener('DOMContentLoaded', function () {
  const select2 = document.getElementById('infrastructure__mobile-tabs');
  const contentDivs2 = document.querySelectorAll('.infrastructure__mobile-tab');

  function switchTab(selectedTab) {
    contentDivs2.forEach(function (content) {
      if (content.getAttribute('data-tab') === selectedTab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }

  switchTab(select2.value);

  select2.addEventListener('change', function () {
    switchTab(this.value);
  });
});

// BURGER

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', function () {
    menu.classList.toggle('header__nav--active');
  });
});



//  Selecting the navbar list
const navBarList = document.getElementById('navbar__list');

// Selecting all sections
const sections = document.querySelectorAll('section');

// Building daynmic navbar using "for of loop"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const section of sections) {
  const sectionId = section.id;
  const sectionNavData = section.dataset.nav;
  const list = document.createElement('li');
  list.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionNavData}</a>`;
  navBarList.appendChild(list);
}

// Section Active State using Intersection Observer API
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const options = {
  root: null,
  threshold: 0.6,
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
    }
  });
}, options);

// to observe every section element because it's a NodeList
sections.forEach((section) => {
  observer.observe(section);
});


const modal = document.querySelector(".hamburger-view-links");;
const hamburger_btn = document.querySelector('#hamburger');
const all_Elem = document.querySelectorAll('.move_down');

hamburger_btn.addEventListener('click', () => {
 modal.classList.toggle("hamburger-activate");
 document.body.classList.toggle('hidden')
})

let options = {
 root:null,
 rootMargin: '0px',
 threshold: 0,
}


function elem_func(entries, observer) {
 const [entry] =  entries
 entries.map(el => el.isIntersecting === true ? el.target.classList.add('move_up') : el.target.classList.add('_'));

 console.log(entry);
}

const observer_Elem = new IntersectionObserver(elem_func, options);
all_Elem.forEach(el => observer_Elem.observe(el))


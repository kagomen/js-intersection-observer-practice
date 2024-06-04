'use strict';

const targets = document.querySelectorAll('.box')

const observer = new IntersectionObserver(callback)

targets.forEach(target => {
  observer.observe(target)
})

function callback(entries, obs) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear')
    } else {
      return
    }
    obs.unobserve(entry.target)
  })
}

// const target = document.querySelector('.box')

// const options = {
//   threshold: 0.2,
//   rootMargin: '0px 0px -100px'
// }

// const observer = new IntersectionObserver(callback, options)

// function callback(entries, obs) {
//   console.log('監視を開始します')
//   console.log(entries[0])

//   if (entries[0].isIntersecting) {
//     entries[0].target.classList.add('appear')
//   } else {
//     return
//   }

//   console.log('監視を停止します')
//   obs.unobserve(entries[0].target)
// }

// observer.observe(target)

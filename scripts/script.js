const lastOne = document.querySelector('#last-One');

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
})

myObserver.observe(lastOne)
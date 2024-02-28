document.querySelectorAll(".content").forEach(item => {
    item.addEventListener('click' ,()=>{
       let p = item.querySelector('p');
       let b = item.querySelector('button');
       openClose(p,b);
    });
});

function openClose(p,b){
    if (p.classList.contains('active')) {
        b.innerHTML = "+";
        p.classList.remove('active');
    } else {
        p.classList.add('active');
        b.innerHTML = "-";
    }
}

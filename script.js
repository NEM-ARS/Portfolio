let win = document.querySelectorAll('.win');

// window.onscroll = function(e){
//     win.forEach((item)=>{
//         let lll = Math.floor(80*(item.getBoundingClientRect().top/window.innerHeight));
//         if(item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().top>0){
//             item.style.transform = `rotateX(${lll}deg)`;
//             // console.log(item)
//         }
//         else{
//             item.style.transform = `rotateX(${0}deg)`;

//         }
//     })

// }


window.onscroll = function(e){

    win.forEach((item)=>{
        item.style.transform = `rotateX(${0}deg)`;
        if(item.getBoundingClientRect().top>0 && item.getBoundingClientRect().top < window.innerHeight){
            let lll = Math.floor(80*(item.getBoundingClientRect().top/window.innerHeight));
            let op = (window.innerHeight-item.getBoundingClientRect().top)/window.innerHeight;
            item.style.transform = `rotateX(${lll}deg)`;
            item.style.opacity = op.toFixed(2);
            // console.log(item);
        }else{
            item.style.transform = `rotateX(${0}deg)`;
            item.style.opacity = 1

        }
    })

}

// document.getElementById('form').onsubmit = function(e){
//     e.preventDefault();
//     console.log('dfdf')
// }
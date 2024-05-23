let win = document.querySelectorAll('.box');

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
rotateFrame()

window.onscroll = ()=> rotateFrame();

function rotateFrame(){
    win.forEach((item)=>{
            // console.log(Math.floor(item.getBoundingClientRect().top), window.innerHeight);
        // item.style.transform = `rotateX(${0}deg)`;
        if(Math.floor(item.getBoundingClientRect().top) < window.innerHeight){
            let gg =item.querySelector('.win')
            // let gg = item.closest(win)
            
            let lll = Math.floor(80*(item.getBoundingClientRect().top/window.innerHeight));
            console.log(lll)
            let op = (window.innerHeight-item.getBoundingClientRect().top)/window.innerHeight;
            gg.style.transform = lll>0?`rotateX(${lll}deg)`:"rotateX(0deg)";
            gg.style.opacity = op.toFixed(2);
        // }else{
        //     item.style.transform = `rotateX(${0}deg)`;
        //     item.style.opacity = 1

        }
    })
}

        setInterval(function(){
            let arr = document.getElementsByClassName("opacity-scroll");
            for(let i = 0;i<arr.length;i++){
                let y0 = window.scrollY + window.innerHeight / 2,
                    y = arr[i].offsetTop;
                if (y <= y0){
                    arr[i].style.opacity = "1";
                }else{
                    arr[i].style.opacity = 20 / (y - y0);
                }
            }
}, 10);
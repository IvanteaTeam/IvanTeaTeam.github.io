window.onload = function(){
    var divs = document.getElementsByClassName('scroll-animation');
    for(var i  =0;i<divs.length;i++){
        divs[i].setAttribute('id','no-showable');
    }
    window.onscroll();
}

window.onscroll = function(){
    if(window.scrollY%5==0){
        var 
        divs = document.getElementsByClassName('scroll-animation'),
        count = 0;
        for(var i = 0;i<divs.length;i++){
            var dist = divs[i].offsetTop-window.scrollY;
            if(dist<window.innerHeight&&divs[i].getAttribute('id')=="no-showable"){
                setTimeout(function(obj){obj.setAttribute('id',"showable");},200*count,divs[i]);
                count++;
            }else if(dist>window.innerHeight){
                divs[i].setAttribute('id','no-showable');
            }
        }
    }
}
window.onscroll();
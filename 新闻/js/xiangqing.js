$(function(){
    let scroll= scrollobj();
    $(".lift-fixed .item")[1].onclick=function(){
        animate(scroll,{scrollTop:0},500);
    }
    window.onscroll=function(){
        if(scroll.scrollTop>=1205){
            $(".shareBox")[0].style.display="none";
            $(".mini-hot-haohuo")[0].classList.add("rfixed");
        }else{
            $(".shareBox")[0].style.display="block";
            $(".mini-hot-haohuo")[0].classList.remove("rfixed");
        }
    }
    xuanxiangka1(".lift-fixed .item",".infotxt");
})
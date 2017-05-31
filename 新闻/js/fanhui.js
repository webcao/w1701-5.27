$(function(){
    xuanxiangka1(".lift-fixed .item",".infotxt");
    let scroll= scrollobj();
    $(".lift-fixed .item")[1].onclick=function(){
        animate(scroll,{scrollTop:0},500);
    }
})
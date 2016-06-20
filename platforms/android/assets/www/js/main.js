//Shop

$("#shopLeftNav .list .item").click(function(){
    console.log(1111111);
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
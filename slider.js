$(document).ready(()=>{
    let l=$(".slider>img").length;
    let k="";
    for(let i=0;i<l;i++)
        k+=`<div class="btn-circle"></div>`
    $(".list-btn").html(k);
    $(".slider>img").eq(0).addClass("active-img")
    $(".list-btn>div").eq(0).addClass("active-btn")
    let current=0;
    function setLoop(){
        timer=setInterval(()=>{
            current++;
            if(current==l)
                current=0;
            $(".slider>img").removeClass("active-img")
            $(".slider>img").eq(current).addClass("active-img")
            $(".list-btn>div").removeClass("active-btn")
            $(".list-btn>div").eq(current).addClass("active-btn")
        },3000);
    }
    setLoop();
    $(".list-btn>div").click(function(){
        current=$(this).index();
        $(".slider>img").removeClass("active-img")
        $(".slider>img").eq(current).addClass("active-img");
        $(".list-btn>div").removeClass("active-btn")
        $(this).addClass("active-btn")
        clearInterval(timer);
        setLoop();
    })
})
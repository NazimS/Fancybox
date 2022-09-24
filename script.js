$(()=>{
    $("img:nth-of-type(even)").css({
        float: "left",
        'padding-right': "20px"
    })
    $("img:nth-of-type(odd)").css({
        float: "right",
        'padding-left': "20px"
    })
    $("img").click(function(){
        $(this).animate({ 
            width: $(this).width() == 300 ? "40%" : "300px" 
        })
    })
})

let line = document.getElementsByTagName("h2")[1]
let btn = document.getElementById("btn")
window.onscroll = function() {
    btn.style.display = window.pageYOffset > line.offsetTop ? "inline-block" : "none"
}
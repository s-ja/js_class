var start_btn = document.querySelector('#calculate');

start_btn.addEventListener("click", change_scene);

function change_scene(){
    var article_tags = document.querySelectorAll("article");
    article_tags[0].classList.add("d_none")
    article_tags[1].classList.remove("d_none")
}

var calc_btn = document.querySelector("#dday_calc");
var calc_btn = document.querySelector("#dday_reset");

calc_btn.addEventListener("click", dday_calc);

function dday_calc(){
//영상참조
}
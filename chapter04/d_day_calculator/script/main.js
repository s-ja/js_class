var start_btn = document.querySelector('#calculate');

start_btn.addEventListener("click", change_scene);

function change_scene(e){
    console.log(e);
    var article_tags = document.querySelectorAll("article");
    article_tags[0].classList.add("d_none");
    article_tags[1].classList.remove("d_none");
}

// var calc_btn = document.querySelector("#dday_calc");
// var calc_btn = document.querySelector("#dday_reset");
var dday_Form = document.querySelector("#dday_form")

var reset_btn = dday_Form.querySelector("#dday_reset");

dday_Form.addEventListener("submit", dday_calc);

function dday_calc(e){
    e.preventDefault();
    // if(user_year.length == 4){
    //     user_year.padStart(...)
    // }
    var user_year = document.querySelector("#user_year").value;
    var user_month = document.querySelector("#user_month").value;
    var user_day = document.querySelector("#user_day").value;
//영상참조
// console.log(user_year, user_month, user_day);
console.log(typeof user_year, typeof user_month, typeof user_day);
var today = new Date();
// var now_month = today.getMonth();
var the_date = new Date(user_year,user_month-1,user_day);
var diff_date = the_date.getTime() - today.getTime();
var result = Math.ceil(diff_date / (1000*60*60*24));

// alert("D-daY : "+result);
// 팝업 아이디가 d_day를 찾아. 그,리고 내부에 텍스트를 출력해
// 팝업.클래스 목록.제거 ("d_none")
// 나머지 style 제어
var d_day_pop = document.querySelector("#result_pop");
var d_day_text = d_day_pop.querySelector("#d_day");
d_day_text.innerHTML = `<strong>${result}</strong>일`;
d_day_pop.classList.remove("d_none");
}
var login_form = document.querySelector("#login_form")
        var login_btn = login_form.querySelector("#go_login")
        var user_id = document.querySelector("#user_id")
        var user_pw = document.querySelector("#user_pw")
        
        var admin_id = "super7797", admin_pw = "super7797"
        //실제 백엔드 개발자, 웹프로그래머 등은 db에서 admin id,pw를 가져와서 비교

        login_form.addEventListener("submit", submitFunc);

        function submitFunc(e){
            e.preventDefault(); //새로고침을 막아줌
            if(user_id ==="" || user_pw ===""){
                alert("아이디 또는 비밀번호를 입력하세요.")
                Location.reload()
            }
            //console.log(user_id.value, user_pw.value); //폼에 입력한 value를 확인
            //교제 p.70 중첩 if 구문으로 값을 비교
            // 로그인 성공시 첫 화면으로 이동
            // 로그인 실패시 실패를 알리고 다시 시도
            if (admin_id === user_id.value){
                if(admin_pw === user_pw.value){
                    alert("관리자님 환영합니다.\n관리자페이지로 이동합니다.")
                    location.href = "/admin_only";
                }else{
                    alert("아이디 또는 비밀번호를 확인하세요.")
                    location.reload();
                }
            }else{
                alert("아이디 또는 비밀번호를 확인하세요.")
            }
        }
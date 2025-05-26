
const sbtn = document.querySelector("#start");
const sin = document.querySelector("#txt");

/**
 * 메인 input에 시작단어 입력 후 enter누르면(or 버튼 클릭) 다음화면에 제시어가 나오면서 li 생성 되면서 시작*/
sbtn.addEventListener("click", () => {
    keyword=sin.value.trim();
    console.log(keyword);
});



/** 2.input에 마지막 낱말 입력 하여 true값이면 li생성 false값이면 alert 창으로 틀렷다는 표시 송출
 */




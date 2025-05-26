let key1='';

const in1 = document.querySelector("#word");
const btn1 = document.querySelector("#btn-in");
const list = document.querySelector("#word-list");
const p1=document.querySelector("p");
// console.log(keyword);
// const li=document.createElement("li");
// li.textContent=keyword;
// list.appendChild(li);
if(list.length>6){
    list.remove();
}

btn1.addEventListener("click", ()=>{
    key1=in1.value.trim();
    p1.textContent=`제시어 : ${key1}`;
    if(key1===''){
        alert("낱말을 입력하세요");
        return;
    }
    const last=list.lastElementChild.textContent;
    const lastword=last[last.length-1];
    const firstword=key1[0];
    if(lastword === firstword){
        p1.textContent=`제시어 ${key1}`;
        const li1=document.createElement("li");
        li1.textContent=key1;
        list.appendChild(li1);
    }else{
        alert(`틀렸어요. "${lastword}" 로 시작해야합니다`)
    }
    in1.value='';
    in1.focus();
});
in1.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        btn1.click();
            }
        
        });
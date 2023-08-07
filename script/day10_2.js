//ES6 DOM 쉽게 관리할 수 있는 for ~ in ~of ~Each
const study= ['html','css','javascript','design']
//기본 for 문법 for(변수생성; 조건식; 증감식){실행결과}
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//for ~in 문법(index number)
for(let i in study){
    console.log(i)
} //~의 인덱스를 확인 한다는 뜻으로 in 뒤에 대상 이름 작성
//for ~of 문법(DOM)
for(let i of study){
    console.log(i)
}
console.log('----------')
const box = document.querySelectorAll('.box a')
for(let i in box){
    console.log(i) //DOM index+기본속성 출력
}
for(let i of box){
    console.log(i) //DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
    //a에 마우스를 올렸을 때 콘솔의 정보를 띄운다는 뜻
        i.style.backgroundColor = 'aqua'
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'coral'
        i.style.color = 'white'
    })//mouseout end
    //a를 클릭했을 때 팝업창으로 준비중 띄우기
    i.addEventListener('click',function(){
        window.alert('준비중입니다.')
    })//click end
}//for of boxA end

//for ~ in = 인덱스 위주 제어
//for ~ of = 객체 위주 제어
//forEad = 인덱스, 객체, 배열을 동시 제어
const num = [20,21,22,23,24,25]
/* 
    객체.forEach(function(객체 매개 변수, 인덱스 매개 변수, 배열 매개 변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    })
    * 매개변수명은 의미만 맞게 자유롭게 설정 가능.
    * 매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의.
    * 매개변수가 필요한 대상만 작성 가능.
*/
//num.forEach(function(t, i, a){})
//num.forEach(function(dom, in, ar){})
//의미만 맞으면 변수명은 어떻게 쓰던 전부 가능
box.forEach(function(target, index, array){
    console.log(target)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log('----------------')
    target.addEventListener('mouserdown',function(){
        target.style.color = 'red'
    })
})
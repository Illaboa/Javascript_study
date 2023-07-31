let a = 10 //숫자데이터
let b = '10' //문자데이터
let total = a+b //숫자+문자=문자
//암시적 형변환(자바스크립트 자동으로 데이터 변환(기본))
console.log(`total >> ${total}`) //1010
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`)
console.log('\------------------')
//명시적 형변환(문자>숫자, 숫자>문자)),개발자가 직접 에디터 영식 결장
console.log(`b=${typeof(b)}, b+1=${b+1}`)
//Number() == 형변환 메소드
//괄호 안에 작성한 데이터를 숫자 데이터로 변환한다.
console.log(`b=${typeof(Number(b))}, ${typeof(b)}}`)
let c = Number(b)
console.log(`c=${typeof(c)}, c=${c}, a+c=${a+c}`)
console.log('---------------------------------------')
/* const d = Number(window.prompt('1+1=?'))
console.log(`d=${d}, ${typeof(d)}`) */
// Number 메서드는 괄호 안에 넣어 사용 할 수 있다.
// N예) Number(객체.메서드())
console.log('------------')
const userInput = document.querySelector('#user')
const resultBtn = document.querySelector('#uresult')
console.log(userInput, resultBtn); //DOM*2 출력
//동작 이벤트 없이 input의 값 확인은 초기값만 인식한다.
//input value 값은 숫자데이터로 입력해도 문자데이터로 자동 암시적 형변환이 된다.
userInput.value = 1234 // 초기값 대입
console.log(`userInput typeof=${typeof(userInput.value)}`) 
console.log(`userInput value=${userInput.value}`) 

let userInputNumber = Number(userInput.value) //숫자로 형변환한 userInput값
console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
console.log(`userInputNumber value = ${userInputNumber}`)
//버튼 클릭 기준 input의 현재값을 파악 후 결과 출력하기
resultBtn.addEventListener('click',function(){
    userInputNumber = Number(userInput.value)
    console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
    console.log(`userInputNumber value = ${userInputNumber}`)
})
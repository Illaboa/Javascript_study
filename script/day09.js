//반복문 for
/* 
    for(반복문 변수 생성; 변수 활용 조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일 때 for가 끝나는 위치
*/
//1~10까지 반복하는 반복문
//for에서 자주 이용하는 지역변수 명=i(index를 의미),j, m, n, k
//domr개체의 index가 0에서 시작하기 때문에 i=0을 많이 씀
for(let i=0; i<11; i++){
    console.log('hello js'+(i+1))
}
//0~5반복문
for(let i=0; i<6; i++){
    console.log('반복문'+(i+1))
}
//5~0반복문
for(let i=5; i>0; i--){
    console.log(i)
}
//10~30 반복문 + 10~30 중 홀수만 반복출력
for(let i=10; i<31; i++){
    if(i%2===1){
        console.log(i)
    }
}
//10~30 반복문 + 10~30 중 짝수만 반복출력
for(let i=10; i<31; i++){
    if(i%2===0){
        console.log(i)
    }
}
//DOM, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','photoshop','illustrator']
/* /console.log(study[0])
console.log(study[1])
console.log(study[2]) */
//객체의 수를 나타내는 length 속성을 사용해서 const 수를 i에 기입하기 쉽게 만들기
for(let i=0; i<study.length; i++){ //비교연산으로 stidy.lenght보다 작거나 산술연산인 -1을 뒤에 붙이면 undefinded 출력X
    console.log(study[i])
}
//객체의 수 length 속성
// 1. html 공부
// 2. css 공부
// 3. javascript 공부
// 4. figma 공부
// 5. photoshop 공부
// 6. illustrator 공부
/* const study = ['html','css','javascript','figma','photoshop','illustrator']
for(let i=0; i<study.length; i++){
    console.log(`${i+1}. ${study[i]} 공부`)
} */
//위 study 배열을 역순으로 출력하기 illustrator > html
console.log('---------------')
for(let i=study.length-1; i>=0; i--){ /* 비교연산자가 들어가지 못하니 비교값으로 역순처리 */ 
console.log(`${i+1}. ${study[i]} 공부`)
}
//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 이용 coffee배열 모두 출력
for(let i=0; i<coffee.length; i++){
    console.log(coffee[i])
}
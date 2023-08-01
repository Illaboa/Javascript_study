//배열과 객체
const array1 = ['html', 'css', 'js']
console.log(array1) //전체 배열 출력(테스트용 전체 종성 헉안 맟 인댁스 번호 확인시 사용)
console.log(array1[0]) //개별 배열 직접출력(이벤트, 속성, 메서드 동적 결과 제작시 사용)
console.log //DOM 변수 생성
const li = document.querySelectorAll('ul li') //2개 이상의 DOM개체를 저장하니 All 태그로
console.log(li) //전체 정상출력, 인덱스 번호 확인 등
console.log(li[1]) //개별출력(이벤트, 속성, 메서드 활용)
// ----------------------------객체
// 배열은 2개 이상의 데이터가 서로 연관되어 있어야 함.
//예시로 쇼핑몰 옵션을 만든 다 칠 때: size배열, color 배열, option배열 개별구성로 나누기
//const product_size = ['S', 'M', 'L']
//const product_color = ['white', 'yellow', 'black']

//객체는 2개 이상의 데이터가 속성:값으로 이루어져 있기 때문에 큰 분류만 같다면 다양한 속성을 하나의 객체로 취급할 수 있다.
const cat1 = {
    color:'black',  //속성은 "" 작성 안 함
    age:1
}
console.log(cat1) //전체확인
console.log(cat1.color) //객체.속성 개별출력
console.log(cat1.age)
//객체 내 속성값으로 배열 삽입한 경우
const cat2 = {
    color:['white', 'brown', 'black'],
    age:2
}
console.log(cat2)
console.log(cat2.color[1]) //color 속성 배열 순서가 0, 1, 2이니 브라운을 나타내려면 1 기입 

const product = {
    size:['S', 'M', 'L'],
    color:['white', 'yellow', 'black']
}
console.log(product)
console.log(product.size[0])
console.log(product.color[0])
//자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('---------------------------')
//연결연산자
console.log('10'+10); //1010연결연산자 ->문자가 하나라도 들어가면 연결연사자로 처리
console.log(10+10); //더하기 연산자
console.log(typeof('10'+10)); //string
console.log(typeof(10+10)); //number
console.log('----------');
let age = 25
//age = age+1 
age += 1
age -= 1
//대입연산자 방식 = 오른쪽 부터 먼저 계산하고 대입연산자를 통해 좌측에 대입함
console.log(`${age}살`)
age -= 1 //age - age-1
console.log(age);
age *=5 //age = age*5
console.log(age);
age /=2 //age = age/2
console.log(age); 
age %=2 //age = age%2
console.log(age); 
console.log('---------------------')
//복합대입연산자를 이용한 태그 생성방법
let cart_li = '<ul>' //빈 장바구니 초기
//참기름 1개 장바구니 담기
cart_li += '<li>참기름1개</li>'
//베이글 2개 추가로 장바구니 담기
cart_li += '<li>베이글2개</li>'
cart_li += '</ul>'
console.log(cart_li);
console.log('---------------------------')
//태그생성메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart.contents');
cartNewLi.innerHTML = '<li>참기름 1개</li>'
cartNewLi.innerHTML += '<li>베이글 2개</li>'
console.log(cartNewLi);
console.log(cart_contents);
cart_contents.appendChild(cartNewLi)
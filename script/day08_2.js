//if 2단, 3단 이상 조건식을 여러개 작성하는 방법
/* 
    if(조건식1){
        조건식1이 참일 경우 실행
    }else if(조건식2){
        조건식1이 거짓이고 조건식2가 참일 경우 실행
    }else if(조건식3){
        조건식 1,2가 거짓이고 조건식3이 참일 경우 실행
    }
    }else{
        모든 조건식이 거짓일 때 실행
    }
*/
//위는 세트라 조건 중 하나가 맞으면 실행됨, else if는 여러개 생성이 가능
/*
    if(조건식1){참일 때 실행}

    if(조건식2){참일 때 실행}
*/
const a = 20
if(a>0 && a<11){
    console.log('a는 1~10사이 값이다.')
}else if(a>10 && a<51){
    console.log('a는 11~50사이 값이다.')
}else{
    console.log('a는 조건 밖 값을 가지고 있다.')
}

// 경품 추첨기
//추첨번호를 입력받고 추첨번호에 따라 상품 출력
// 1:냉장고
// 2:세탁기
// 3:컴퓨터
// 그 외 모든 숫자능 꽝
const lucky = Number(window.prompt('추첨번호는?'))
if(lucky === 1){
    console.log('냉장고 당첨')
}else if(lucky === 2){
    console.log('세탁기 당첨')
}else if(lucky === 3){
    console.log('컴퓨터 당첨')
}else{
    console.log('꽝')
}
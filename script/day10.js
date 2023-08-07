//for
//0~4 반복문
for(let i=0; i<=4; i++) {
    console.log(i);
}
//변수
const li =document.querySelector('.test li')
console.log(li) 
for(let i=0; i<li.length; i++){
    console.log(li[i])//li마다 개별 출력을 해야하니 인덱스 값 [0]을 같이 넣음
    //li[i].style.backgroundColor = 'yellow'
    //홀수 li 노랑
    //짝수 li 아쿠아
   if(i%2==1){ //홀수 짝수 다르게 색 설정
        li[i].style.backgroundColor = 'yellow'
    }else{
        li[i].style.backgroundColor = 'aqua'
    }
}
    /* li[0].style.backgroundColor= 'yellow' 
    li[1].style.backgroundColor= 'yellow' 
    li[2].style.backgroundColor= 'yellow' 
    li[3].style.backgroundColor= 'yellow' */
    //다중 for
     for(let i=0; i<2; i++){ //0> 1까지 2번 반복문
        console.log(i)
        for(let j=1; j<6; j++){ //1~5까지 5번 반복문
            console.log(`j = ${j}`)
        }
    }
    console.log('---------------------------')
    //ul-li*3-span*2
    let ulTag = document.createElement('ul')
    let liTag = document.createElement('li')
    const answer1 = document.querySelector('.answer1')
    console.log(ulTag, answer1, liTag)
    for(let i =0; i<3; i++){//1단 for li*3
        liTag = document.createElement('li') 
        //위에 이미 생성된 변수 명이니 또 만들고 싶으면 let을 삭제(let은 중복 태그 만드는 것이 가능하니 지우자)
        liTag.innerHTML += `li${i+1}`
        for(let j=0; j<2; j++){//2단 for span*2
            liTag.innerHTML += `<span>span${j+1}</span><br>`
        } 
        ulTag.appendChild(liTag)
    }
    answer1.appendChild(ulTag)
    console.log(ulTag)
    // innerHTML 작성은 가장 마지막에 속한 내용 = inline or img 등
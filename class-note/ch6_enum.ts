/*
enum Shoes{
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes) //0 출력 //별도의 값을 입력하지 않으면 숫자형 이넘으로 취급한다.
 */
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes) //나이키 출력 //별도의 값을 지정했기 때문에 해당 값으로 취긊한다.

//예제
/*
function askQuestion(answer: string){
    if(answer === 'yes'){
        console.log('정답입니다')
    }else if(answer === 'no'){
        console.log('오답입니다')
    }
}
askQuestion('yes')
askQuestion('예스') //다양한 형태로 값이 들어가면 안되지만 string일 경우 들어간다.
 */
enum Answer {
    YES = 'Yes',
    NO = 'No',
}
function askQuestion(answer: Answer){
    if(answer === Answer.YES){
        console.log('정답입니다')
    }else if(answer === Answer.NO){
        console.log('오답입니다')
    }
}
askQuestion(Answer.YES) //이렇게 사용하지 않으면 오류가 난다.
askQuestion(Answer.NO)
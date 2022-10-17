//인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

class Person {
    name: string
}

var developer: Developer;
var person: Person;
//왼쪽 타입이 더 크기 때문에 오류가 발생한다.
//developer = person //오류 -> person은 name만 developer는 name,skill 두가지 타입을 가지고 있기 때문에 대입이 불가능
person = developer //왼쪽 타입이 더 작기 때문에 더 큰값으로는 대입 가능
//developer = new Person() //오류

//함수
var add = function (a: number) { //파라미터 한개
    //..
}
var sum = function (a: number, b: number) { //파라미터 2개
    //...
}
//sum의 함수 구조가 add 함수 구조보다 크다.
//add = sum; //불가능: sum은 2개인자를 받아야 하기 때문에
sum = add; //가능하다: add는 1개 인자만 받기 때문 2개 인자를 넘기는 sum에 대입가능

//제네릭
interface Empty<T> {
    //...
}

var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T; //오른쪽 타입이 다르기 때문에 호환되지 않는다
}

var notEmpty1: NotEmpty<string>
var notEmpty2: NotEmpty<number>
//notEmpty1 = notEmpty2
//notEmpty2 = notEmpty1
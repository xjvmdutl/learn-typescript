/*
function logText(text) {
    console.log(text)
    return text
}

logText(10) //10
logText('하이') //문자열 '하이'
logText(true)//진위값 true
*/
/*
function logText<T>(text: T): T {
    console.log(text)
    return text
}
logText<string>('하이') //파라미터 타입과 리턴 타입을 실행하는 시점에 넣어준다.
 */
/*
function logText(text:string){
    console.log(text)
    //text.split('').reverse().join('') //text가 string 타입이기 때문에 가능한 것이다
    return text
}

function logNumber(num: number){
    console.log(num)
    return num
}

//모든 타입을 받을 수 있다 -> 암묵적으로 logText에서 타입을 받지 않았기 때문
logText('a')
logNumber(10)//이렇게 하면 문제 없이 동작한다. -> 단 유지보수 관점에서 중복되는 코드를 계속 작성해 나가므로 좋지 않다.
 */

/*
function logText(text:string | number){ //유니온 타입 //함수 하나에서 여러 타입을 받는다
    console.log(text)
    //text는 string, number을 교집합만, 사용할 수 있다.
    return text
}
var a = logText('a'); //a타입은 string | number가 된다
logText(10)
 */

function logText<T>(text): T { //입력 받을 타입과 리턴타입을 제네릭으로 받는다.
    console.log(text)
    return text
}

const str = logText<string>('a') //반환되는 타입과 파라미터 모두 string으로 들어간다.
str.split('') //str이라는 값이 string이라는 것을 알 수 있다.
const login = logText<boolean>(true)

//인터페이스에 제네릭을 선언하는 방법
/*
interface Dropdown {
    value: string;
    selected: boolean;
}

//const obj: Dropdown = {value: 10, selected: false} //오류
 */
interface Dropdown<T> {
    value: T;
    selected: boolean
}

const objNumber: Dropdown<number> = {value: 10, selected: false} //제네릭 선언
const objString: Dropdown<string> = {value: "abc", selected: false} //제네릭 선언

//제네릭의 타입 제한
/*
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length) //text.length가 되지 않는다 why? text에 어떤 값이 들어올지 ts가 알 수 없다.
    text.forEach(function (text) {
        console.log(text)
    })
    return text
}

logTextLength(['hi', 'abc'])
 */

//제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T { //T라는 것은 LengthType을 하위 타입으로 반드시 length가 있다
    text.length;
    return text
}

logTextLength('a')//a라는 것은 length가 존재하기 때문에 오류가 안난다.
//logTextLength(10) //오류, 숫자 10에는 length가 없기 때문
logTextLength({length: 10})

//제네릭 타입 제한 3 - keyOf
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T { //타입에 인터페이스에 존재하는 키속성만 받게 하겠다
    return itemOption
}
getShoppingItemOption("name")

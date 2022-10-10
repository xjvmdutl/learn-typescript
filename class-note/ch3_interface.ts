interface User {
    age: number;
    name: string;
}

//변수에 인터페이스를 적용하는 방법
var seho: User = { //반복되는 타입에 대해서 하나의 인터페이스를 정의해서 동작시킬 수 있다.
    age: 33,
    name: '세호'
}

//함수에 인터페이스 활용
function getUser(user: User) { //이 함수는 특정 형식을 중시하는 데이터만 받겠다
    console.log(user)
}

const usr = {
    name: '캡틴',
    age: 100
}
getUser(usr); //usr 같은 경우 정의했던 User 타입이어야 오류가 나지 않는다

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    //함수의 전체 모습까지 인터페이스로 정의해서 제한을 할 수 있다.
    (a: number, b: number): number; //숫자 2개를 받아 숫자를 리턴한다
}

var sum: SumFunction;
sum = function (a: number, b: number) {
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string //index는 숫자, 반환음 숫자
}

var arr: StringArray = ['a', 'b', 'c']
//arr[0] = 10 //특정 인덱스로 접근해서 작업을 할 때, 타입이 string 이므로 오류가 발생한다.

//인터페이스 딕션너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp //key=string, value=RegExp
}

var obj: StringRegexDictionary = {
    //sth: /abc/
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
//obj['cssFile'] = 'a' //오류가 발생, value에 정규식이 오지 않았기 떄문
Object.keys(obj).forEach(
    function (value) { //타입 추론 기능 또한 사용할 수 있다.
    })

//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person { //중복되는 프로퍼티를 상속 받을 수 있다
    language: string;
}

var capt: Developer = {
    language: 'hi', //name, age까지 구현해야 오류가 안난다.
    age: 100,
    name: '캡틴'
}
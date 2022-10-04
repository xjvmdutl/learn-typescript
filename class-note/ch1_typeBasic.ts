// JS 문자열 선언
//var str = 'hello'

//TS 문자열 선언
//const, let을 사용해야한다
const str: string = 'hello' //왼쪽 변수는 문자열로 선언 하겠다.
//TS 숫자형 선언
let num: number = 10

//TS 배열 타입 선언 -> 어떤 타입만 들어올지도 선언해 주어야 한다
let arr: Array<number> = [1, 2, 3]
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', /* 10 //숫자는 안된다*/]
let items: number[] = [1, 2, 3] //number의 배열 리터럴로 표현도 가능하다.

//TS 튜플 -> 특정 위치에 어떤 타입이 올지 지정
let address: [string, number] = ['gangnam', 100];

//TS 객체
let obj: object = {}
/*
//person 내부 타입은 아무거나 올 수 있다.
let person: object = {
    name: 'capt',
    age: 100,
}
 */
let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

//TS 진위값
let show: boolean = true

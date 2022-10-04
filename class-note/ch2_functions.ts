//함수의 파라미터에 타입을 정의하는 방식
/*
function sum(a: number, b: number) { // a, b 두개의 number 타입을 인자로 받아 number 타입을 리턴한다
    //숫자들 끼리 더하기 떄문에 반환 값은 반드시 number 타입으로 타입 추론을 한다
    return a + b;
}
sum(10, 20)
 */

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10
}

//함수에 타입을 정의하는 방식(종합)
/*
function sum(a: number, b: number): number {
    return a + b
}
 */

function sum(a: number, b: number): number {
    return a + b
}

//sum(10, 20, 30, 40); //오류가 난다 -> 2개의 인자만 필요한데 4개가 들어갔다

//함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) { //항상 많은 파라미터를 받고 싶지 않을 수도 있다.

}
log('hello world')
log('hello ts', 'abc') // ? 연산자가 붙은 파라미터 같은 경우 필수적으로 올 필요가 없다 -> 함수의 옵셔널 파라미터
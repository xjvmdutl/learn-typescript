function add(a: number, b: number): number { //반환 타입, 파라미터 타입까지 명시 가능
    return a + b
}

//add(10, '20'); //컴파일오류가 발생한다.
var result = add(10, 20);
result.toLocaleString() //자동완성으로 number가 제공하는 함수를 바로 사용할 수 있다.

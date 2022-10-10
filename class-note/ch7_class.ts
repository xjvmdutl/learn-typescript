class Person{
    private name: string; //변수의 접근 범위도 정의 할 수 있다
    public age: number;
    readonly log: string //읽기만 가능한 범위
    //리액트나, 뷰와 같은 프레임 워크도 최근에는 클래스 기반이 아닌 function 기반으로 작성한다
    constructor(name: string, age:number ) { //생성자로 들어오는 파라미터를 타입 제약을 할 수 있다
        //타입 스크립트에서는 프로퍼티가 없으면, 사용할 수 없다
        this.name = name
        this.age = age
    }
}
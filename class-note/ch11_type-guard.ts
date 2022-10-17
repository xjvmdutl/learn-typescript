interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

//Developer도 반환할 수 있고, Person도 반환할 수 있다.
function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Marking'}
}

var tony = introduce() // Developer, Person 모두 받을 수 있는 타입
//console.log(tony.skill) //skill이 없다고 나온다, -> 공통된 속성만 접근할 수 있기 때문에
if ((tony as Developer).skill) { //타입 단언을 통해 skill에 접근할 수 있다.
    console.log((tony as Developer).skill) //내부 코드, 외부 코드에서 접근할 때마다 타입 단언을 선언해야한다
} else if ((tony as Person).age) {
    console.log((tony as Person).age)
}

//타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined //skill이 있다
}

if (isDeveloper(tony)) {
    console.log(tony.skill) //tony가 Developer의 skill 접근 가능
} else {
    console.log(tony.age) //그렇지 않으면 Person의 age 접근 가능(Person 타입)
}
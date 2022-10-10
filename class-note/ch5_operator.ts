/*
function logMessage(value: any){
    console.log(value)
}

logMessage('hello')
logMessage(100) // any일 경우 가능
 */

var seho: string | number | boolean

function logMessage(value: string | number) { //유니온 타입 : 하나이상을 타입을 사용할 수 있다
    if (typeof value === 'number') {
        //any 같은 경우 런타임 시 값이 정해져 API 속성을 사용할 수 없지만, typeof를 사용하게 된다면 해당 타입을 API를 사용할 수 있다.
        //타입 가드 : 타입을 필터링 하며 범위를 좁혀가는 과정
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toString()
    }
    throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

/*
function askSomeone(someone: Developer | Person) {
    //someone에 접근할 수 있는 타입은 name 뿐이다. -> 교집합만 준다.
    //인터페이스를 여러개 쓰게 되면, 타입 safety 하게 사용하기 위해 공통적인 속성만 제공한다.
}

var capt: string & number & boolean //인터섹션
function askSomeone(someone: Developer & Person) {
    //유니온 타입 같은 경우 타입 가드가 필요하지만, 인터섹션은 모두 포함이 되므로, 타입가드 필요 없이 사용이 가능하다
    someone.skill
    someone.age
}
*/
function askSomeone(someone: Developer & Person) {

}

//유니온 타입 같은 경우 Developer 나 Person 만 규현되면 된다.
//askSomeone({name: '디벨로퍼', skill: '웹 개발'})
//askSomeone({name: '캡틴', age: 100})
askSomeone({name: '디벨로퍼', age: 100, skill: '웹 개발'}) //Developer 속성과 Person 속성 모두 가지는 타입을 써야한다
//ES2015(ES6) 문법
class Person{
    //클래스 로직
    constructor(name, age) { //초기화
        console.log('생성 되었습니다')
        this.name = name;
        this.age = age
    }
}

var seho = new Person('세호', 30);//생성 되었습니다.
console.log(seho)

/*
var user = {name: 'capt', age:100}
var admin = {}
admin.prototype = user
admin.role = 'admin'
console.log(admin.age)
console.log(admin.name)
console.log(admin.role)
*/

function Person(name, age){ //기존의 function으로 사용하던 것을 class 로 변경한 것일 뿐이다.
    this.name = name
    this.age = age
}
var capt = new Person('캡틴', 100) //이러한 생성자 함수는 기본적으로 function으로 구현할 수 있지만, 좀 더 쉽게 사용하기위해 class 라는 것을 사용한 것 뿐이다.
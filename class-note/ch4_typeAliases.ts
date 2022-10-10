/*
interface Person {
    name: string;
    age: number;
}
 */
type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello' //타입을 사용하는 모든 곳에서 별칭을 사용해서 붙일 수 있다.

type Todo = { id: string; title: string; done: boolean; };

function getTodo(todo: Todo) {

}
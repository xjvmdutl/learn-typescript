//타입 추론 기본1
var a = 'abc'; //값을 어떤것으로 설정하냐에 따라 타입이 변경된다.

function getB(b = 10) { //b값을 넘기지 않으면, 10이 할당 되며, 타입이 number로 추론된다
    var c = 'hi' //c 타입은 string으로 타입추론이 일어났다
    return b + c; //숫자 + 문자 = 문
}

//타입 추론 기본2
/*
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = { //제네릭의 값을 타입스크립트가 추론한다
    value: "abc",
    title: 'hello',
}
*/

//타입 추론 기본3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<V> extends Dropdown<V> {
    //Dropdown을 value 또한 V타입, DetailedDropdown의 tag 역시 V 타입이 된다
    description: string;
    tag: V;
}

var detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 1,
    tag: 2
}

//Best Common Type : TypeScript가 비슷한 타입을 어떤 타입으로 추론할 지 정해주는 알고리즘(가장 근접한 타입을 찾아간다, Union)
var arr1 = [1, 2, true] //number | boolean
var arr2 = [1, 2, true, true, 'a']
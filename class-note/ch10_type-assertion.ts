//타입 단언(type assertion)
var a;
//var b = a; //a 타입(any)를 b에 타입을 넣는다.
a = 20;
a = 'a';
var b = a as string; //개발자가 봤을때, 해당 타입은 마지막에 대입한 값인 string 인것을 알기 때문에, 타입 단언을 이용해 타입을 지정할 수 있다

//DOM API 조작
var div = document.querySelector('div') as HTMLDivElement; //해당 타입이 반드시 있다는 것을 단언해야 하기 때문에 as 를 사용해야한다
//document.querySelector('#app'); //ID 접근

if (div) {
    div.innerText;
}
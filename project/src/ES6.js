//ES6 최신 문법 ( 구조 분해 할당)
/*
function fetchData() {
  return {
    data: {
      name: 'capt',
      age: 100,
    },
    config: {},
    statusText: '',
    headers: {},
  };
}
//변수로 받아 접근 해야한다
const result = fetchData();
console.log(result.data);
console.log(result.config);
//구조 분해 할당
const { data, config, statusText } = fetchData(); //한번에 접근해 변수에 초기화 가능
console.log(data);
console.log(config);
//변수의 이름과 다른 이름으로 초기화
const { data: captain } = fetchData();
console.log(captain);
 */

//ES6 최신 문법 ( Async & Await )
//동기 방식일 경우는 값이 항상 있다는것이 보장이 되기 때문에 문제가 없다
/*
var a = 10;
console.log(a);
var sum = a * 2;
console.log(sum);
//비동기 방식
function fetchData() {
  var user = $.ajax('users/1', function (user){
        //콜백 함수가 매번 들어간다 -> 이를 해결하기 위해 promise 나왔다
        //promise도 then 절이 매번 이어져야 하므로 async 문법이 나왔다
        console.log(user);
        $.ajax('users/2', ....)
      }); //제이쿼리로 값을 읽어 오는 함수로 가정
  console.log(user);
}

//최신 비동기 방식
async function fetchData(){
  var user = await $.ajax('users/1');
  console.log(user)
}
*/

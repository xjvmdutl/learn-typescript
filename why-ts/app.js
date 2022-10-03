// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url)
}
//콘솔로 찍기 전에는 fetchUser 결과를 알 수 없다.

fetchUser().then(function (response){
    //response.email //response 안에 어떤 데이터가 있는지 idea에서 확인을 할 수 있다.
    //response.address.city
})


function startApp() {
    fetchUser()
        .then(function (response) {
            //console.log(response);
            user = response.data;
            // TODO: 이름, 이메일, 주소 표시하기
            console.log(user)
            username.innerText = user[0].name
            email.innerText = user[0].email
            address.innerText = user[0].address.street //글자를 틀리거나,오타를 내게 되면 화면에 오류가 나타난다 -> 안전하지 않다
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();

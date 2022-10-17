/*
function fetchItems(): string[] {
    let items = ['a', 'b', 'c'];
    return items;
}
 */

function fetchItems(): Promise<string[]> {
    let items = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    }); //프로미스를 반환하게 되면 타입 추론을 할 수 없다
}

let result = fetchItems();
console.log(result);

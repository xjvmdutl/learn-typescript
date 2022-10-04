let arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'sarah' },
  { gender: 'male', name: 'bone' },
];
var filtered = arr.filter(function (item) {
  //필터를 사용해 특정 조건일 때 뽑아낼 수 있다
  if (item.gender === 'female') {
    return item;
  }
});
console.log(filtered);

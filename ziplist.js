const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function zipList(listOne, listTwo) {
  const allList = [];
  for (let i = 0; i <= listOne.length - 1; i++) {
    allList.push(listOne[i]);
    allList.push(listTwo[i]);
  }
  return allList;
}

console.log(zipList(letters, nums));

const zipListTheSimpleWay = (listOne, listTwo) => _.flatten(_.zip(listOne, listTwo));

console.log(zipListTheSimpleWay(letters, nums));

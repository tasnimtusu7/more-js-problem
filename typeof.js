const country = 'bangladesh';
const age = 52;
const inIndependet = true;
const student = { Name : 'shormi', id : 07, group : 'science'};
const friends = [12, 13,23,22,21,10,19];
function add(num1,num2){
    return num1,num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof inIndependet);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(typeof country);

//--------------
console.log(friends.includes(21));

const newfrindage = [12,21,23,32];
const allfriends = newfrindage.concat(friends);
console.log(allfriends);
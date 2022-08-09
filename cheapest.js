const phones = [
    {name:'sumgsum', strorage:"32gb",camera : 10, price: 20000},
    {name:'ixomi', strorage:"32gb",camera : 10, price: 32000},
    {name:'iphone', strorage:"32gb",camera : 10, price: 82000},
    {name:'symphony', strorage:"32gb",camera : 10, price: 11000},
    {name:'oppo', strorage:"32gb",camera : 10, price: 14000},
    {name:'vivo', strorage:"32gb",camera : 10, price: 18000},
    {name:'waltone', strorage:"32gb",camera : 10, price: 21000},
]
function cheapestphone(phones){
    let cheapest = phones[0];
    for(let i = 0; i <phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const myselection = cheapestphone(phones);
console.log(myselection);
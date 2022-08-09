const products = [
    { name: 'show', prise : 1200 },
    { name: 'pant', prise : 2200 },
    { name: 'belt', prise : 200  },
    { name: 'shirt', prise : 1000 },
    { name: 'sunglass', prise : 400}, 
 ]

function totalcost (products){
    let sum = 0;
    for( let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.prise;
    }
    return sum;
}
const expanc = totalcost(products);
console.log(expanc);
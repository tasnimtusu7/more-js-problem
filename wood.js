function woodCalculator (cheirQuantity,tableQuantity,bedQuantity){
    const perchirwood = 3;
    const pertablewood = 5;
    const perbedwood = 10;

    const chirwood = cheirQuantity* perchirwood;
    const tablewood = tableQuantity * pertablewood;
    const bedwood = bedQuantity* perbedwood;

    const totalwood = chirwood + tablewood + bedwood;
    return totalwood;
}
const totalwood = woodCalculator(1,1,1);
console.log(totalwood);
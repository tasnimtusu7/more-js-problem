/* 
1. if you buy 100 ticket your ticket price is 100tk;
2. if you buy more than 100 and less than 200 ticket your ticket price is 90tk;
3.  100 ticket ----> 100tk;
4. 100 - 200 tickit ----> 90tk;
5. 200+ -----> 70tk
*/
function ticketPrise (ticketQuantity){
    const frist100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const prise = ticketQuantity * frist100Rate;
        return prise;
    }
    else if(ticketQuantity <= 200 ){
        const frist100Prise = 100* frist100Rate;
        const restticketQuantity = ticketQuantity - 100;
        const restTicketPrise = restticketQuantity * second100Rate;
        const totalPrise = frist100Prise + restTicketPrise;
        return totalPrise; 
    }
    else {
        const frist100Prise = 100* frist100Rate;
        const second100Prise = 100 * second100Rate;
        const restticketQuantity = ticketQuantity - 200;
        const restTicketPrise = restticketQuantity * restTicketRate ;
        const totalcost =  frist100Prise + second100Prise + restTicketPrise;
        return totalcost;
    }
}

const prise = ticketPrise(230);
console.log("prise:", prise);
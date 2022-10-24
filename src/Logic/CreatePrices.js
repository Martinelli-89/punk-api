const createPrices = (abv, size) => {

    let price;

    switch(true) {

        case(abv > 10) :
            price = 10.95
            break;
        case(abv > 6) :
            price = 7.95;
            break;
        case(abv > 3.9) :
            price = 4.95;
            break;
        default :
            price = 3.8;
            break;
    }

    if(size == "half") {
        price = (Math.ceil((price/2)*10)/10) + 0.1;
    }

    return price;

}

export default createPrices;
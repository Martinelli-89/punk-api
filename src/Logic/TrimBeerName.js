const trimName = (beer) => {

    if(beer.length < 18) {
        return beer;
    }

    const ind = beer.indexOf(" ", 15);

    return beer.slice(0, ind-1);

}

export default trimName;
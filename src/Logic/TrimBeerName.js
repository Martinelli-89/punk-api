const trimName = (beer) => {

    if(beer.length < 12) {
        return beer;
    }

    const ind = beer.indexOf(" ", 9);

    return `${beer.slice(0, ind)}...`;

}

export default trimName;
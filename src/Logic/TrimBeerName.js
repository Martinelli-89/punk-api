const trimName = (beer) => {

    if(beer.length < 18) {
        return beer;
    }

    const ind = beer.indexOf(" ", 18);

    return `${beer.slice(0, ind)}...`;

}

export default trimName;
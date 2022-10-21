const dataToQuery = (param1, param2) => {

    let query;
    
    switch (param1) {

        case("ABV"):
        case("IBU"):
        case("EBC"):
            query=`?${param1.toLowerCase()}`;
            break;
        case("BY NAME"):
            query=`?beer_name=`;
            break;
        case("BY YEAST"):
            query=`?yeast=`;
            break;
        case("BY HOP"):
            query=`?hops=`;
            break;
        case("BY MALT"):
            query=`?malt=`;
            break;
        case("ONE"):
            query=`/random`;
            break;

    }

    switch (param2) {

        case ("LESSER THEN"):
            query +=`_lt=`;
            break;
        case ("GREATER THEN"):
            query +=`_gt=`;
            break;
        case ("BREWED BEFORE"):
            query +=`?brewed_before=`;
            break;
        case ("BREWED AFTER"):
            query +=`?brewed_after=`;
            break;

    }

    return query;

}

export default dataToQuery;
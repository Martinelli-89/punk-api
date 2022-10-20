import './Beers.scss';


const Beers = ({beers}) => {

    let render;
    
    if (beers == undefined) {
        
        render = 
            <section className='intro'>
                <h3 className='intro__description'>
                    Welcome to the _Nology pub!
                    Search trough our menu below
                    and get yourself a well deserved pint!
                </h3>
            </section>

    }

    return (
        <>
            {render}
        </>
    );
}

export default Beers;

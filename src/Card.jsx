function Card(props) {



    return (  
        <>

        <h1> Name:- {props.name}</h1>
        <h2>Password:- {props.password}</h2>
        <h3>Age:- {props.Age}</h3>
        </>
    );
}

export default Card;
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar() {
    return ( 

        <>

            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    {/* <li><Link to="/card1">Card</Link></li> */}
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to={"/signIn"}>SignInSide</Link></li>
                    <li><Link to={"/hooks"}>Hooks</Link></li>
                </ul>
            </div>   

        
        </>
     );
}

export default Navbar;
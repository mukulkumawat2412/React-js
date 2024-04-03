import "./mycard.css"
import Image from "./media/Snapchat.jpg"
import Instagram from "./media/instagram.jpeg.png"
import Snapchat from "./media/Snapchat1.jpeg.png"
import Linkdin from "./media/Linkdin.jpeg.png"
import Twitter from "./media/Twitter.jpeg.png"

function Card1(props){

    return(
        <>
        <div className="card">
            <img src={Image} alt="" />
            <h1 className="cardtitle">{props.name}</h1>
            <p className="carddesc">{props.desc}</p>
            <ul className="sociallink">
                <li><a href=""><img src={Instagram} alt="" /></a></li>
                <li><a href=""><img src={Snapchat} alt="" /></a></li>
                <li><a href=""><img src={Linkdin} alt="" /></a></li>
                <li><a href=""><img src={Twitter} alt="" /></a></li>
            </ul>
            <button className="mybtn2">More Info</button>
        </div>
        </>
    )
}
export default Card1;
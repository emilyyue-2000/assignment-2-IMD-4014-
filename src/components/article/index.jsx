import greenImg from "../../images/green1.webp"
import "./styles.css"
export const Article1 = () => {
    return(
        <div className= "greenFriday">
            <h1>This black friday, we're going green!</h1>
            <img className= "greenImage" src={greenImg} alt="Green Ikea Recyling Image"></img>
        <div classname= "text">
            <p>At IKEA, we want to enable a healthier and more sustainable life for the many – at an affordable price. That’s why we’re helping customers save money and the planet with Green Friday.
Throughout November, we’re offering a number of ways for you to join our circular efforts including additional savings on Circular Hub (As-Is) items, incentives for donating furniture and electronics, and more.</p>
                <ul className= "greenList">
                <li>Virtual Workshop |</li>
                <li>Circular Hub (As-is) discount |</li>
                <li>Furniture donations and electronics recyling drive |</li>
                <li>HUVUDROLL Vegetable balls offer</li>
            </ul>
            </div>
        </div>
    );
}
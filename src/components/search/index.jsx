import magnifyingIcon from "../../images/magGlass.png"
import "./styles.css"

export const SearchBar = () => {
    return (
    <div className = "searchBar">
        <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="What are you looking for?"
            name="s" 
        />
        <button type="submit"><img className="searchIcon" src = {magnifyingIcon}></img></button>
        </form>
    </div>
    );
}

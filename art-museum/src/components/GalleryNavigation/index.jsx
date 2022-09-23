import { NavLink } from "react-router-dom";
import Gallery from "../Gallery";

function GalleryNavigation (props) {

    const records = props.art.records;
    console.log(records);

    const galleryList = records.map((gal) => {
        return (<Gallery id={gal.gallerynumber} name={gal.name}/>)
    })

    return (
        <nav>

            <NavLink to="/">
                Home
            </NavLink>

            <h1>Galleries</h1>

            {galleryList}

        </nav>
    )
}


export default GalleryNavigation;
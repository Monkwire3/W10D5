import { useParams } from "react-router-dom";

function GalleryView() {
    let { galleryId } = useParams()
    console.log('galID: ', galleryId)
    return(
        <h1>Hello from GalleryView</h1>
    )
}

export default GalleryView;
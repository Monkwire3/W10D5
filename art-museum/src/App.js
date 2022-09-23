import harvardArt from "./data/harvardArt";
import GalleryNavigation  from "./components/GalleryNavigation";

function App() {

  return (
    < GalleryNavigation art={harvardArt} />
  );
}

export default App;
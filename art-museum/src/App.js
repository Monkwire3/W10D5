import harvardArt from "./data/harvardArt";
import GalleryNavigation  from "./components/GalleryNavigation";
import { Route, Switch } from 'react-router-dom'
import GalleryView from "./components/GalleryView";
import Home from "./components/home";

function App() {
  return (
    // < GalleryNavigation art={harvardArt} />
    <div className="pageWrapper">
     <Switch>
        < Route path="/galleries/:galleryId" component={GalleryView}/>
        < Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
import harvardArt from "./data/harvardArt";
import GalleryNavigation  from "./components/GalleryNavigation";
import { Route, Switch } from 'react-router-dom'
import GalleryView from "./components/GalleryView";
import Errors from "./components/Error";

function App() {
  return (
    // < GalleryNavigation art={harvardArt} />
    <div className="pageWrapper">
     <Switch>
        < Route path="/galleries/:galleryId" component={GalleryView}/>
        < Route path="/" component={() => <GalleryNavigation art={harvardArt}/>}/>
        < Route path="*" component={<Errors/>} />
      </Switch>
    </div>
  );
}

export default App;
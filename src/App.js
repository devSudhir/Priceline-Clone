
import './App.css';

 import { Route, Switch } from 'react-router-dom';

import { Navbar } from "./components3/Navbar"
import { ProductPage } from './components3/ProducctPage';
import { SearchSection } from "./Component/Hotel/SearchSection";
import { Booking } from "./components3/Booking"
import { Offer } from "./components3/SummerSale"
import { RoomPage} from "./Components4/RoomPage/RoomPage"
import { Footer } from "./Footer/Footer"
import { AllSearch }from "./Component/AllSearch"
function App() {
  return (
    <div className="App">
 
    
    
      <Switch>

        <Route exact path="/"> <Offer></Offer> <Navbar />  <SearchSection /><Footer/></Route>
        <Route path="/Hotels"> <Navbar />  <AllSearch/><ProductPage /><Footer/></Route>
        <Route exact path="/Rooms/:id"> <Navbar />  <AllSearch/><RoomPage/></Route>
        <Route path="/users/:id"> <Navbar /><Booking/></Route>
        <Route exact path="/userid"> <Navbar /></Route>
        
      </Switch>
     
    


  
      {/* <Switch>
      <Route exact path="/"><Navbar></Navbar><Card></Card></Route>
      <Route path="/form"><Navbar></Navbar> <Form></Form></Route>
     </Switch> */}
    
    </div>
  );
}

export default App;

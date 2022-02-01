
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import JoinUs from './Components/JoinUs/joinUs';
import Footer from './Components/Footer/footer';
import store from "./store/store";
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
import OffersCard from './Components/offersCard/offersCard';
import Offers from './Components/Offers/Offers';
import OfferParent from './Components/Offers/OffersParent';
import Delivery from './Components/Delivery/Delivery';
import Restaurant from './Components/Restaurant/Restaurant';
import { Provider } from "react-redux";
import "./App.css";
import Dineout from './Components/Dineout/Dineout';
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';
function App() {
  const exclusion=["/","/JoinUs","/Careers"]
  return (
    <>

     {/* <Home/> */}
      <Provider store={store}>
         
        <Router>
          
          <Switch>
          <Route path="/Careers" component={Career}/>
           <Route path="/JoinUs" component={JoinUs}/>
           <Route path="/Home" component={Home}/>
           <Fragment>
            <Navbar/>
            
          <Route path ="/Delivery" exact component={Delivery} /> 
          <Route path="/DinOut" exact component={Dineout}/>
          <Route path ="/Restaurant/:id" exact component={Restaurant} /> 
          <Route path="/Offers" exact component={OfferParent}/>
          </Fragment>
           
          </Switch>
         
          <Footer/>
        </Router>
       
      </Provider>
</>
  )




  



    

}

export default App;

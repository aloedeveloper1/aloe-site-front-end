import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Compte from './screens/Compte/compte';
import Contact from './screens/Contact/contact';
import Equipe from './screens/Equipe/equipe';
import Home from './screens/Home/home.screen';
import Services from './screens/Nos-services/services';
import Travaux from './screens/Travaux/travaux';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home}></Route>
      <Route path={'/services'} component={Services}></Route>
      <Route path={'/travaux'} component={Travaux}></Route>
      <Route path={'/equipe'} component={Equipe}></Route>
      <Route path={'/contact'} component={Contact}></Route>
      <Route path={'/compte'} component={Compte}></Route>
    </BrowserRouter>
  );
}

export default App;

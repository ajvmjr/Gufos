import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Categoria from './pages/Categoria';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Evento from './pages/Evento';
import Usuario from './pages/Usuario';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path= '/' component = {App}/>
                <Route path="/categorias" component = {Categoria}/>
                <Route path="/login" component = {Login}/>
                <Route path="/eventos" component = {Evento}/> 
                <Route path ="/usuarios" component = {Usuario}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

//Trocar renderização
ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();

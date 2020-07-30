import React from 'react';
import {Route} from 'react-router-dom';///es/Route';
import Home from './components/Home/Home';
import PaymentRoot from './components/Payment/PaymentRoot';
import Introduction from './components/Introduction/Introduction';
import FunctionHunch from './components/FunctionHunch/FunctionHunch';
import PaymentResult from './components/PaymentResult/PaymentResult';

const Root=() =>{
    return (
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/introduction" component={Introduction}/>
            <Route exact path="/functionHunch" component={FunctionHunch}/>
            <Route path="/payment" component={PaymentRoot}/>
            <Route path="/payment/result/" component={PaymentResult}/>
        </>
    );
}

export default Root;
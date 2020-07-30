import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Payment from './Payment';
import PayInfo from './PayInfo';

const PaymentRoot = ()=> {
    return(
        <>
            <Switch>
                <Route exact path="/payment" component={Payment}/>
                <Route exact path="/payment/payinfo"component={PayInfo}/>
            </Switch>
        </>

    )
}

export default PaymentRoot;
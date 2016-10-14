import React, {
  PropTypes
} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Link
} from 'react-router';
import App from '../components/App';
import Order from '../components/order/Order.jsx'
import Center from '../components/Center';
import CustomerList from '../components/customerList/CustomerList';
import QrCode from '../components/code/QrCode';
import Card from '../components/card/Card';
import Withdrawals from '../components/withdrawals/Withdrawals';
import CashedInfo from '../components/withdrawals/CashedInfo';
import BonusInfo from '../components/withdrawals/BonusInfo';
import HpMoney from '../components/hpMoney/HpMoney.jsx';
import Setting from '../components/setting/Setting.jsx';
import NotFound from '../components/NotFound';

const Routes = ({
    history
  }) =>
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={Center} />
      <Route path="order" component={Order} />
      <Route path="customerList" component={CustomerList} />
      <Route path="code" component={QrCode} />
      <Route path="card" component={Card} />
      <Route path="withdrawals" component={Withdrawals} />
      <Route path="cashedInfo" component={CashedInfo} />
      <Route path="bonusInfo" component={BonusInfo} />
      <Route path="hpmoney" component={HpMoney} />
      <Route path="setting" component={Setting} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;

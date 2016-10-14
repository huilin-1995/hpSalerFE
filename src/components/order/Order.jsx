import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  ActivityIndicator
} from 'antd-mobile';
import OrderBox from './OrderBox.jsx';
import styles from './Order.less';
import {
  hashHistory
} from 'react-router';


//ES6
class Order extends Component {
 //首次渲染之前
  componentWillMount() {
    var status = this.props.order.orderList || false;
    console.log(this.props.order)
    if (!status) {
      this.props.dispatch({
        type: 'order/get'
      });
    }
  }
  render() {
      let loading = this.props.order.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
    } else {
      let total = this.props.order.total || {};
      let orderList = this.props.order.orderList || {};
      console.log(this.props.order)
    }
    return (        
      <div>
        <div className={styles.tab}>
          <div className={styles.tabBtn}>全部订单</div>
          <div className={styles.tabBtn}>已完成</div>
          <div className={styles.tabBtn}>已退款</div>
        </div>
        <div>
          <div className={styles.orderTotal}>已完成订单总数:<span>{this.props.order.total}</span></div>
          <OrderBox orderData={this.props.order.orderList}></OrderBox>
        </div>
      </div>
    );
  }
}

function mapStateToProps({
  order
}, {
  location
}) {
  return {
    order: order,
  };
}

export default connect(mapStateToProps)(Order);

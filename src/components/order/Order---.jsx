import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  PageResult,
  ActivityIndicator
} from 'antd-mobile';
import OrderBox from './OrderBox.jsx';
import styles from './Order.less';
import {
  hashHistory
} from 'react-router';

//ES6
class Order extends Component {
   componentWillMount() {
    var status = this.props.order || false;
    console.log(this.props)
    if (!status) {
      this.props.dispatch({
        type: 'order/get'
      });
    }
  }
  render() {
      let loading = this.props;
      console.log('Order')
      console.log(this.props.order)
    // if (loading) {
    //   return (<ActivityIndicator toast text="正在加载"/>)
    // } else {
    //   let total = this.props.order || {}
    // }
    return (
      <div>
        <div className={styles.tab}>
          <div className={styles.tabBtn}>全部订单</div>
          <div className={styles.tabBtn}>已完成</div>
          <div className={styles.tabBtn}>已退款</div>
        </div>
        <div>
          <OrderBox orderData={{
            "orderID": "2016112232392007897",
            "state": "已完成",
            "consignee": "刘梦如",
            "orderTime": "2016-07-22 11:20",
            "goodsNum": "2",
            "totalPrice": "1786.00",
            "rebate": "28.00",
            "goodsList": [{
                "img": "http://XXXXX/XXXX.jpg",
                "title": "新升级 IPSA茵芙纱自律循环美肌液R2补水保湿乳液",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }, {
                "img": "http://XXXXX/XXXX.jpg",
                "title": "AHC玻尿酸修复气垫BB霜 #21 12克+替换装12克",
                "price": "1180.00",
                "num": "1",
                "unit": "瓶"
            }]
        }}></OrderBox>
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
    order: order
  };
}

export default connect(mapStateToProps)(Order);

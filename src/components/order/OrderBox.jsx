import React, {
  Component,
  PropTypes
} from 'react';

import {
  PageResult
} from 'antd-mobile';
import styles from './Order.less';


export default class OrderBox extends Component {
  showOrder(data,key) {
    return (
      <div className={styles.order} key={key}>
        <div className={styles.orderNum}>
          <span>订单号：{data.orderID}</span>
          <span className={styles.state}>{data.state}</span>
        </div>
        <div className={styles.consigneeInfo}>
          <span>收货人：{data.consignee}</span>
          <span> {data.orderTime} </span>
        </div>
        {this.goodslist(data.goodsList)}
        <div className={styles.total}>
          <div>共{data.goodsNum}件商品</div>
          <div>
            <span>合计: <em>￥{data.totalPrice}</em></span>
            <span>返利: <em>￥{data.rebate}</em></span>
          </div>
        </div>
      </div>
    )
  }


  orderlist(data){
    let a = [],
        b = [];
    console.log(data);
    data = data || [];
    let length = data.length;
    for(let i = 0;i < length;i++){
      a.push(this.showOrder(data[i],i));
      
    }
    return a; 
  }
  showGoods(data,key) {
    console.log(data,key)
    return (
      <div className={styles.goods} key={key}>
        <div className={styles.goodImg}>
          <div>
            <img src={data.img} alt=""/>
          </div>
        </div>
        <div className={styles.goodName}>
          <div>{data.title}</div>
          <div>规格：{data.unit}</div>
        </div>
        <div className={styles.goodPrice}>
          <div>￥{data.price}</div>
          <div>x{data.num}</div>
        </div>
      </div>
    )
  }
  //展现订单中所有商品
  goodslist(goodsList){
    console.log(goodsList)
    let b = [];  
    let length = goodsList.length;
    for(let i = 0;i< length;i++){
      b.push(this.showGoods(goodsList[i],i));
    }
    return b;
  }
  render() {
    let data = this.props.orderData; 
    return(
      <div>
        {this.orderlist(this.props.orderData)}
      </div>
    )
  }
}

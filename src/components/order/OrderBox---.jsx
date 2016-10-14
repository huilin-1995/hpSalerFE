import React, {
  Component,
  PropTypes
} from 'react';

import {
  PageResult
} from 'antd-mobile';
import styles from './Order.less';



//ES6
export default class Order extends Component {
  //展现一件商品
  showGoods(data,key) {
    return (
      <div key = {key}>
        <div><img src={data.img} alt=""/></div>
        <div>
          <div>{data.title}</div>
          <div>规格：{data.unit}</div>
        </div>
        <div>
          <div>￥{data.price}</div>
          <div>x{data.num}</div>
        </div>
      </div>
    )
  }
  //展现订单中所有商品
  goodslist(data){
    let list = [];
    for(let i = 0,length = data.length;i< length;i++){
      list.push(this.showGoods(data[0],i));
      console.log(1)
    }
    return list;
  }
  render() {
    console.log('OrderBox')
    let data = this.props.orderData;
    return (
      <div>
        <div>
          <span>订单号:{data.orderID}</span>
          <span>{data.state}</span>
        </div>
        <div>
          <span>收货人：{data.consignee}</span>
          <span> {data.orderTime} </span>
        </div>
        {this.goodslist(data.goodsList)}
        <div>
          <div>共{data.goodsNum}件商品</div>
          <div>
            <span>合计：<em>￥{data.totalPrice}</em></span>
            <span>返利：<em>￥{data.rebate}</em></span>
          </div>
        </div>
      </div>
    );
  }
}
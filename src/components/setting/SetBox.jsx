import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  Icon,InputItem,
  ImagePicker, WhiteSpace
} from 'antd-mobile';
import styles from './Setting.less';
import toQueryString from '../lib/toQueryString.js';

class SetBox extends React.Component {

  render() {
    let file = this.props.shopInfo.user.headImg;
    return (
      <div>
        <div className={styles.userInfo}>
        <div className={styles.pic}>
          <img src={this.props.shopInfo.user.headImg} />
        </div>
        <div className={styles.personal}>
          <p>{this.props.shopInfo.user.username}</p>
          <p>{this.props.shopInfo.user.phone}</p>
        </div> 
      </div>
      <div className={styles.shopInfo}>
        <div className={styles.shopTitle}>店铺信息</div>
        <div className={styles.shopName}>
          <p>店铺名</p>
          <span>{this.props.shopInfo.shop.shopName}</span>
          <Icon type="edit" />
        </div>
        <div className={styles.nickname}>
          <p>微信昵称</p>
          <span>{this.props.shopInfo.shop.wechat}</span>
        </div>
      </div>
      <div className={styles.shopDescribe}>
        <div className={styles.shopTitle}>店铺描述</div>
        <div className={styles.describe}>
          <span>{this.props.shopInfo.slogan}</span>
          <Icon type="edit" />
        </div>
      </div>
      </div>
    )
  }
}

export default SetBox;




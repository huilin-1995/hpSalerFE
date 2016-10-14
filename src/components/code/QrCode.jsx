import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  ActivityIndicator  
} from 'antd-mobile';
import styles from './QrCode.less';


class QrCode extends Component{
  //首次渲染之前
  componentWillMount() {
    var status = this.props.qcode.img|| false;
    console.log(this.props.qcode.img)
    if (!status) {
      this.props.dispatch({
        type: 'qcode/get'
      });
      console.log(status)
    }
  }
	render(){
    let loading = this.props.qcode.loading;
    console.log(this.props)
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    } else {
      let img = this.props.qcode.img || {};
      let popularize = this.props.qcode.popularize || {};
      let QRCode = this.props.qcode.QRCode || {};
      console.log(popularize)
    }
  	return (
      <div className={styles.code}>
        <div className={styles.header}>
          店铺二维码
          <div className={styles.pic}>
            <img src={this.props.qcode.img}/>
          </div>
    	  </div>
        <div className={styles.container}>
          <div className={styles.sendLnk}>
            ①代理推广链接【长按复制链接发送给朋友】
            <p>{this.props.qcode.popularize}</p>
          </div>
          <div className={styles.sendCode}>
            ②代理推广二维码
            <div className={styles.getCode}>
              <img src={this.props.qcode.QRCode }/>
            </div>
            <p>推荐朋友扫描二维码</p>
          </div>
        </div>
      </div>
  	);
  }
}

function mapStateToProps({
  qcode
}, {
  location
}) {
  return {
    qcode: qcode,
  };
}

export default connect(mapStateToProps)(QrCode);


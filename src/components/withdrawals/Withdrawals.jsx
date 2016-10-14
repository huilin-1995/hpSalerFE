import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  List,Button,
  ActivityIndicator
} from 'antd-mobile';
import styles from './Withdrawals.less';
import {
  hashHistory
} from 'react-router';

class Withdrawals extends Component{
  //首次渲染之前
  componentWillMount() {
    var status = this.props.withdrawals.allow || false;

    if (!status) {
      this.props.dispatch({
        type: 'getIncomeInfo/get'
      });
    }
  }
	render(){
    let loading = this.props.withdrawals.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    } else {
      let withdrawals = this.props.withdrawals || {};
    }
  	return (
      <div className={styles.Withdrawals}>
        <div className={styles.header}>
          收入提现
        </div>
        <div className={styles.money}>
          可提现金额(元)
          <p>{this.props.withdrawals.allow}</p>
        </div>
        <p>若没有绑定银行卡请现在卖家中心绑定</p>
        <div className={styles.container}>
          <ul>
            <li>
              <div>待结算金额</div>
              <div>￥<span>{this.props.withdrawals.settlement}</span></div>
            </li>
            <li>
              <div>可提现金额</div>
              <div>￥<span>{this.props.withdrawals.allow}</span></div>
            </li>
            <li>
              <div>提现中金额</div>
              <div>￥<span>{this.props.withdrawals.process}</span></div>
            </li>
            <li>
              <div>已提现金额</div>
              <div>￥<span>{this.props.withdrawals.history}</span></div>
            </li>
          </ul>
        </div>
        <div className={styles.Info}>
          <ul>
            <li>
              <a href="/cashedInfo">
                <div>提现明细</div>
                <div>></div>
              </a>
            </li>
            <li>
              <a href="/bonusInfo">
                <div>奖金明细</div>
                <div>></div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <Button onClick={e => console.log(e)}>申请提现</Button>
        </div>
      </div>
  	);
  }
}

function mapStateToProps({
  withdrawals
}, {
  location
}) {
  return {
    withdrawals: withdrawals,
  };
}

export default connect(mapStateToProps)(Withdrawals);


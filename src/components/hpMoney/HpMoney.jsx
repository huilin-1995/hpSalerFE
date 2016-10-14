import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  ActivityIndicator
} from 'antd-mobile';
import styles from './HpMoney.less';
import {
  hashHistory
} from 'react-router';

class HpMoney extends Component{
  //首次渲染之前
  componentWillMount() {
    var status = this.props.hpmoney.hpmoney|| false;
    console.log(this.props.hpmoney.hpmoney)
    if (!status) {
      this.props.dispatch({
        type: 'hpmoney/get'
      });
      console.log(status)
    }
  }
	render(){
    let loading = this.props.hpmoney.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    } else {
      let user = this.props.hpmoney || {};
      console.log(user)
    }
  	return (
    	<div className={styles.HpMoney}>
    		<div className={styles.userMoney}>
    			您的嗨币
    			<p><span>{this.props.hpmoney.hpmoney}</span>个</p>
    		</div>
    		<div className={styles.HpRule}>
    			<div><span></span>嗨币规则<span></span></div>
    			<p className={styles.ruleQuestion}><span>○</span>嗨币有什么用？</p>
    			<p>获得一定数量的嗨币才可以有资格成为嗨币总监，享受嗨呗总监的福利：</p>
    			<p>1) 享有商品销售利润40%-60%的提成</p>
    			<p>2) 每成功推荐一位店长，会奖励你160元+1嗨币；每成功推荐一位经理，会奖励600元=1嗨币，直推的店长升级经理奖励
		300元</p>
  			  <p className={styles.marginBottom}>3) 享有管理奖，享受团队所有成员零售利润的40%，下级成员新增店长、经理还有奖励。</p>
  			  <p className={styles.ruleQuestion}><span>○</span>嗨币如何获取？</p>
    			<p className={styles.marginBottom}>无论你是店长还是经理，你每次推荐成功一位店长，会有一个嗨币奖励；每次推荐成功一位经理，也会有一个嗨币奖励。</p>
    			<p className={styles.ruleQuestion}><span>○</span>要多少嗨币才能成为总监？</p>
    			<p>店长升级总监：80嗨币</p>
    			<p className={styles.marginBottom}>经理升级总监：60嗨币</p>
    			<div className={styles.hint}>注：间推没有嗨币奖励</div>
  		  </div>
  	   </div>
  	);
  }
}


function mapStateToProps({
  hpmoney
}, {
  location
}) {
  return {
    hpmoney: hpmoney,
  };
}

export default connect(mapStateToProps)(HpMoney);


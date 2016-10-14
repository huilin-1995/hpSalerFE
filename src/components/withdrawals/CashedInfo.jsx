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
//提现明细
class CashedInfo extends Component{
  //首次渲染之前
  componentWillMount() {
    var status = this.props.withdrawals.allow || false;

    if (!status) {
      this.props.dispatch({
        type: 'getCashedInfo/get'
      });
    }
  }
	render(){
    let loading = this.props.withdrawals.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    } else {
      let user = this.props.hpmoney || {};
      console.log(user)
    }
  	return (
      <div className={styles.CashedInfo}>
        <div className={styles.header}>
          <div><p className={styles.on}>培训</p></div>
          <div><p>零售</p></div>
        </div>
        <div className={styles.allInfo}>
          <table frame="below">
            <thead>
              <tr>
                <th>奖金来源</th>
                <th>金额</th>
                <th>日期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>嗨呗总监团队销售业绩利润...</td>
                <td> 3.44 </td>
                <td>16-07-28</td>
              </tr>
              <tr>
                <td>嗨呗总监团队销售业绩利润...</td>
                <td>3.44</td>
                <td>16-07-28</td>
              </tr>
              <tr>
                <td>嗨呗总监团队销售业绩利润...</td>
                <td>3.44</td>
                <td>16-07-28</td>
              </tr>
              <tr>
                <td>嗨呗总监团队销售业绩利润...</td>
                <td>3.44</td>
                <td>16-07-28</td>
              </tr>
            </tbody>
          </table>
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

export default connect(mapStateToProps)(CashedInfo);


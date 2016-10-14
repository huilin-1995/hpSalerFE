import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  Card,
  Carousel,
  Grid,
  ActivityIndicator
} from 'antd-mobile';
import styles from './Center.less';
import {
  hashHistory
} from 'react-router';



class Center extends Component {

  state = {
    data1: [{
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '店铺订单',
      link: '/order',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '客户列表',
      link: '/CustomerList',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '授权证书',
      link: 'hehe',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '店铺二维码',
      link: '/code',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '银行卡',
      link: '/card',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '账户提现',
      link: '/Withdrawals',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '嗨币',
      link: '/hpmoney',
    }, {
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: '店铺设置',
      link: '/setting',
    }]
  }

  //判断选中的位置
  judge(event) {
    // console.log(this.refs.chatImg)
    let width = (document.body.clientWidth - 60) / 12;
    let num = (event.nativeEvent.offsetX - 15) / width;
    let pointNum = Math.ceil(parseInt(num) / 2);
    this.props.dispatch({
      type: 'center/changeNum',
      pointNum: pointNum
    });
  }

  //首次渲染之前
  componentWillMount() {
    var status = this.props.center.income || false;
    console.log(this.props.center)
    if (!status) {
      this.props.dispatch({
        type: 'center/get'
      });
    }
  }

  render() {
    let loading = this.props.center.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
    } else {
      let user = this.props.center.user || {};
      let income = this.props.center.income || {};
      let imgurl = this.props.center.imgurl || "";
      let point = this.props.center.point || [];
      let pointNum = this.props.center.pointNum || 0;
      let position = point[pointNum] || {
        x: 0,
        y: 0,
        date: 0,
        revenue: 0
      }; //点坐标
      //信息显示框坐标
      let boxPos = [];
      for (let index = 0, length = point.length; index < length; index++) {
        boxPos[index] = {};
        boxPos[index].y = point[index].y - 80;
        if (index == 0) {
          boxPos[index].x = point[index].x;
        } else if (index == point.length - 1) {
          boxPos[index].x = point[index].x - 70;
        } else {
          boxPos[index].x = point[index].x - 35;
        }

      }

      let boxPosition = boxPos[pointNum] || {
        x: 0,
        y: 0,
        date: 0,
        revenue: 0
      }; //点坐标
      return (
        <div className={styles.hpCenter}>
          <div className={styles.banner}>
            <div className={styles.pic}>
              <img src={user.headImg} />
            </div>
            <p>{user.username}[{user.job}]</p>
            <p>上级：<span>{user.chief}</span><span className={styles.vertical}>|</span>团队人数：<span>{user.teamNum}</span></p>
          </div>
          <div className={styles.profit}>
            <p className={styles.reven}>七日营收</p>
            <p>昨日收益（元）</p>
            <p className={styles.afterIncome}>{income.yesterday}</p>
            <p>七日累计收益（元）：<span className={styles.sevenIncome}>{income.week}</span></p>
            <p>历史培训收入：<span>{income.train}</span><span className={styles.vertical}>|</span>历史零售收入：<span>{income.retail}</span></p>
            <div className={styles.chart}>
              <img src={imgurl} alt=""  onClick={this.judge.bind(this)}/>
              <div className={styles.tipmain} style={{"left":boxPosition.x,"top":boxPosition.y}}>
                <div>{position.date}</div>
                <div>营收：{position.revenue}</div>
              </div>
              <div className={styles.tiptriangle} style={{left:position.x+9,top:position.y-20}}></div>
              <div className={styles.tipcircular} style={{left:position.x+6,top:position.y-9}}></div>

            </div>
          </div>
          <div className={styles.grid}>
            <Grid data={this.state.data1} onClick={(el, index) => { hashHistory.push(el.link); }}/>
          </div>
        </div>
      );

    }

  }

};


function mapStateToProps({
  center
}, {
  location
}) {
  return {
    center: center,
  };
}

export default connect(mapStateToProps)(Center);

import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  PageResult
} from 'antd-mobile';
import {
  hashHistory
} from 'react-router';
import styles from './MainLayout.less';

const iocn1 = require('./nav1.png');
const iocn2 = require('./nav4-4.png');

class MainLayout extends Component {
  callback(key) {
    console.log(key);
  }
  toBack() {
    hashHistory.push("/")
  }
  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div className={styles.nav} id="nav">
          <a className={styles.btn} href="/">
            <img className={styles.icon} src={iocn1} alt=""/><br/>
            <span>我的店铺</span>
          </a>
          <div className= {styles.btn} onClick={this.toBack}>
            <img className={styles.icon} src={iocn2} alt=""/><br/>
            <span>用户中心</span>
          </div>
        </div>
        <div className={styles.bottomBox}></div>
      </div>
    );
  }

};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainLayout);

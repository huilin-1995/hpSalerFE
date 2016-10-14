import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  ActivityIndicator,
  Icon
} from 'antd-mobile';
import styles from './Setting.less';
import SetBox from './SetBox.jsx';
import {
  hashHistory
} from 'react-router';

//es6写法
class Setting extends React.Component{
  constructor(){ //定义App类的构造函数
    super();  //调用父类的构造函数
  }

  //首次渲染之前
  componentWillMount() {
    this.props.dispatch({
      type: 'setting/get',
    });
    console.log(this.props.setting)
  }
  
	render(){
    let shopInfo = this.props.setting;
    this.state={
      user: shopInfo.user || {},
      shop: shopInfo.shop || {},
      slogan: shopInfo.slogan || '',
      show: true
    }
    console.log(1)
    console.log(this.state)
    let loading = this.props.setting.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    }
  	return (
    	<div className={styles.Setting}>
        <div className={styles.header}>店铺设置</div>
        <SetBox shopInfo={this.state} />
  	  </div>
  	)
  }
}
// let Setting = React.createClass({
//   //要显示的状态
//   let showType = startup.show;
//   if (showType == "loading") {
//     let page = startup.page;
//     ajaxList(page);
//     return (<Spin  spinning={true}></Spin>)
//   } else if (showType == "list") {
//     let page = startup.page;
//     let list = startup.list;
//     let pageCount = startup.pageCount;
//     let statesName = {
//       "1": "已使用",
//       "0": "未使用"
//     }
//     const data = [];
//     for (let i = 0, length = list.length; i < length; i++) {
//       var row = list[i];
//       data.push({
//         id: (page - 1) * 10 + i + 1,
//         key: row["id"], //这里可以是id
//         name: row["title"],
//         pic: row.picUrl,
//         url: row.url,
//         date: row.createTime,
//         states: statesName[row["status"]],
//         address: startup["location"][row["location"]]
//       });
//     }
//     return (
//       <div className={styles.startbox}>
//           <Button  id={styles.newBtn} type="primary" size="large" onClick={addNew}>新建</Button>
//           <div className={styles.clearfloat}></div>
//           <Table className={styles.tab} columns={columns} dataSource={data} pagination={pagination(pageCount,data,startup.page)} onChange={goPage}/>
//         </div>
//     )
//   } else {


//     return (
//       <div className={styles["from-box"]}>
//         <StartupChange ></StartupChange>  
//       </div>
//     )
//   }
// })
function mapStateToProps({
  setting
}, {
  location
}) {
  return {
    setting: setting,
  };
}

export default connect(mapStateToProps)(Setting);


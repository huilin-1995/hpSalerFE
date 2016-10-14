import React ,{
  Component
 } from 'react';
import {
  connect
} from 'react-redux';
import {
  ListView,SearchBar, Toast, Button 
} from 'antd-mobile';
import { 
  createForm 
} from 'rc-form';
import styles from './CustomerList.less';

// const data = [
//   	{
// 	    img: 'http://p3.gexing.com/shaitu/2012/6/22/201262541385983.jpg',
// 	    name: '星星',
// 	    mobile: '137*****777',
// 	    order: '1',
// 	    total: '248',
//   	},
//   	{
// 	    img: 'http://p3.gexing.com/shaitu/2012/6/22/201262541385983.jpg',
// 	    name: '月月',
// 	    mobile: '137*****888',
// 	    order: '2',
// 	    total: '238',
//   	},
// ];
// let index = data.length - 1;

// const NUM_SECTIONS = 1;
// const NUM_ROWS_PER_SECTION = 3;
// let pageIndex = 2;

class CustomerList extends React.Component{
	//首次渲染之前
	componentWillMount() {
    console.log(11111111)
    this.props.dispatch({
      type: 'customerList/get',
      pageNum:1
    });
	}	

	//实例化阶段  该阶段主要发生在组件类被调用(实例化)的时候
  constructor(props){
		super(props);
    const NUM_SECTIONS = 1;
    const NUM_ROWS_PER_SECTION = 5;
    this.pageIndex = 0;

    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this.genData = (pIndex = 0) => {
      for (let i = 0; i < NUM_SECTIONS; i++) {
        let ii = pIndex * NUM_SECTIONS + i;
        let sectionName = `Section ${ii}`;
        this.sectionIDs.push(sectionName);
        this.dataBlob[sectionName] = sectionName;
        this.rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
          const rowName = `S${ii}, R${jj}`;
          this.rowIDs[ii].push(rowName);
          this.dataBlob[rowName] = rowName;
        }
      } 
        // new object ref
      this.sectionIDs = [].concat(this.sectionIDs);
      this.rowIDs = [].concat(this.rowIDs);   
    };
    this.genData();
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
      isLoading: false,
      pageNum:1
    }
    
	}

  componentWillReceiveProps(){
    // if(this.state.isLoading){
    //       this.props.dispatch({
    //     type: 'customerList/get',
    //     pageNum:this.state.pageNum
    //   });      
    // }

  }
 

	onEndReached(event) {
    // load new data('name', 'value')
    console.log('reach end', event);
    //Toast.info('加载新数据');
      this.props.dispatch({
        type: 'customerList/get',
        pageNum:this.state.pageNum
      });    
    //this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.genData(++this.pageIndex);
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
    //     isLoading: false,
    //   });
    // }, 1000); 
    for(var i = 0;i <= this.state.pageNum;i++){
      if(i == this.state.pageNum){
        Toast.info('');
      }else{
        Toast.info('加载新数据');
      }
    }
	}

	render() {
    let data = this.props.customerList;
    console.log(data)
    let customerListLength = data.customerList || [];
    let total = data.customerTotal;
    console.log(total)
    
  	let index = customerListLength.length - 1;
  	
    const row = (rowData, sectionID, rowID) => {
      console.log(index)
    	if (index < 0) {
      	//index = customerListLength.length - 1;
        return <div></div>
    	}
    	const obj = customerListLength[index--];
      console.log(obj)
    	return (
        <div key={rowID} style={{backgroundColor: '#fff'}}>
        	<div className={styles.list}>
        		<div className={styles.head}>
        			<div>
          			<img src={obj.img} />
        			</div>
        		</div>
        		<div className={styles.details}>
            	<div className={styles.uesrInfo}>
              	<p>姓名：<span>{obj.name}</span></p>
              	<p>{obj.mobile}</p>
	            </div>
	            <div className={styles.moneyInfo}>
              	<p>成交订单：<span>{obj.orderNum}</span></p>
              	<p>交易总额：<span>￥{obj.total}</span></p>
	            </div>
        		</div>
        	</div>
      	</div>
    	)
  	}
    this.ctrlBodyScroll(false, true);
    console.log(this.props.customerList)
    return (
    	<div className={styles.custoList}>
    		<div className={styles.listHeader}>客户列表</div>
	        <SearchBar placeholder="请输入你想找的客人"/>
		    <p className={styles.custoTotal}>客户总数：<span>{total}</span></p>
	      	<ListView
	        dataSource={this.state.dataSource}
	        renderFooter={() => (<div className={styles.footer}>
	          {this.state.isLoading ? '加载中...' : '已经加载完成'}
	        </div>)}
	        renderRow={row}
	        pageSize={4}
	        scrollRenderAheadDistance={500}
	        scrollEventThrottle={20}
	        onScroll={() => { console.log('scroll'); }}
	        onEndReached={this.onEndReached.bind(this)}
	        onEndReachedThreshold={10}
          style={{
            height: document.body.clientHeight * 3 / 4,
            overflow: 'auto',
            border: '1px solid #ddd',
            margin: '10px 0',
          }}
	        className={styles.userList}/>
    	</div>
    )
	}
	ctrlBodyScroll(flag, init) {
    document.body.style.overflowY = flag ? 'auto' : 'hidden';
    if (parent && parent !== self && !init) {
      	parent.document.body.style.overflowY = flag ? 'auto' : 'hidden';
    }
	}
};
function mapStateToProps({
  customerList
}, {
  location
}) {
  return {
    customerList: customerList,
  };
}

export default connect(mapStateToProps)(CustomerList);


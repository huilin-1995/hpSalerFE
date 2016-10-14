import React,{ 
  Component 
} from 'react';
import LocalDb from 'localDb';
import {
  connect
} from 'react-redux';
import { 
  ActivityIndicator,
  Icon,
  Button,
  Popup,
  List
} from 'antd-mobile';
import styles from './Card.less';
import CardBox from './CardBox.jsx';
import {
  hashHistory
} from 'react-router';


class Card extends Component{
  //首次渲染之前
  componentWillMount() {
    this.props.dispatch({
      type: 'cardList/get'
    });
    console.log(this.props.card)
    
  }
  //定义Card类的构造函数
  constructor(props){
    super();   //调用父类的构造函数
    this.db = new LocalDb('cardList');
    console.log(new LocalDb('cardList'))
    this.state = {  //定义组件状态
      cardList: this.db.get('cardList') || [],
      show: true,
      //seconds: 0 
    };
  }
  //添加任务，是传递给Header组件的方法
  addList(CardItem){
    this.state.cardList.push(CardItem);  //cardList列表
    this.db.set('cardList',this.state.cardList);
  }
  //删除当前的任务，传递ListItem的方法
  deleteList(index){
    this.state.cardList.splice(index,1);
    this.setState({cardList:this.state.cardList}); //改变状态
    this.db.set('cardList',this.state.cardList);
  }
  //改变任务状态，传递给TodoItem和Footer的组件的方法
  changeListState(index,showState){ 
    this.state.show(index,1,showState);
    this.setState({cardList:this.state.cardList}); //改变状态
    this.setState({show:showState}); //改变状态
    this.db.set('cardList',this.state.cardList);
  }
  //绑定键盘回车事件，添加新任务
  handlerKeyUp(){
    let value = 111;
    /*let newListItem = {
      id: id,
      username: username,
      cardnum: cardnum,
      bank: bank,
      branch: branch
    };*/
    this.addList(newListItem);  //使用props调用App组件传过来的方法
    this.state = {  //定义组件状态
      cardList: this.db.get('cardList') || [],
      show: true,
      loading:true
      //seconds: 0 
    };
  }
  // componentDidMount(){
  //   this.interval = setInterval(this.tick.bind(this), 1000);
  // }

  // tick() { 
  //   this.setState({
  //     seconds: this.state.seconds + 1000 });
  // }
	render(){ 

    let cardList = this.props.card.cardList;
    // let showList = {
    //     show: true
    //   };
    // cardList[show] = cardList;
    this.state={
      cardList: cardList || [],
      show: true
    }
    let loading = this.props.card.loading;
    if (loading) {
      return (<ActivityIndicator toast text="正在加载"/>)
      console.log('正在加载')
    }
    return (
     <div className={styles.Card}>
       <div className={styles.header}>我的银行卡</div>
        <CardBox cardList={this.state.cardList} show={this.state.show} deleteList={this.deleteList.bind(this)} changeListState={this.changeListState.bind(this)} />
        <button onClick={this.handlerKeyUp.bind(this)}>添加银行卡</button>
     </div> 
    )
    
  }
}


function mapStateToProps({
  card
}, {
  location
}) {
  return {
    card: card,
  };
}

export default connect(mapStateToProps)(Card);


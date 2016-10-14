import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  Icon,InputItem 
} from 'antd-mobile';
import styles from './Card.less';
import CardItem from './CardItem.jsx';
import toQueryString from '../lib/toQueryString.js';

class CardBox extends React.Component {
  render() {
    if(this.props.cardList.length == 0){
      return (
        <div className="todo-empty">您还没添加过银行卡哦，快去添加吧</div>
      )
    }else{
       console.log(this.props)
      return (
        <ul className={styles.cardList}>
          {
            this.props.cardList.map((list,index) => {
              let info = {
                id: list.id,
                username: list.username,
                cardnum: list.cardnum,
                bank: list.bank,
                branch: list.branch
              };
              //{...this.props} 用来传递CardBox的todo属性和delete、change方法
              return <CardItem {...info} show={this.props.show} key={index} {...this.props}/>
            })
          }
        </ul>
      )
    }
  }
}

export default CardBox;
/*
export default class CardBox extends Component{
  
  edit(){
    let data = this.props.cardData;
    let option = [];
    if(type == "new"){
      return(
          <div className={styles.userInfo}>
            <span>{data.username}</span>
            <span>{data.cardnum}</span>
          </div>
        <div className={styles.bankInfo}>
          <span>{data.bank}</span>
          <span>{data.branch}</span>
        </div>
        )
    }
    let info = {
          "id": data.,
          "title": adDate["title"],
          "picUrl": adDate["picUrl"],
          "url": adDate["url"],
          "location": adDate["location"], //启动位置：1九宫格，2首页
          "status": adDate["status"],
        }
    //let type = this.props.card.show;
    console.log(data)
    if()

  }
edit(){
  let data = this.props.cardData;
}
  //展示一个银行卡
  showCard(data,key){
    return(
      <div className={styles.cardList} key={key}>
        <div className={styles.userInfo}>
          <span>{data.username}</span>
          <span>{data.cardnum}</span>
        </div>
        <div className={styles.bankInfo}>
          <span>{data.bank}</span>
          <span>{data.branch}</span>
        </div>
        <div className={styles.edit}>
          <span><Icon type="check-circle" />默认银行卡</span>
          <span><Icon type="edit" />编辑</span>
          <span><Icon type="delete" />删除</span>
        </div> 
      </div>
    )
  }

  //展示银行卡列表
  cardsList(data){
    data = data.cardList || [];
    let list = [];
    let length = data.length;
    for(let i = 0;i< length;i++){
      list.push(this.showCard(data[i],i));
    }
    return list;
  }

	render(){
     console.log(1111)
  	return (

      <div>
        {this.cardsList(this.props.cardData)}
      </div>
  	);
  }
}
*/




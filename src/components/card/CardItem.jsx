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
import toQueryString from '../lib/toQueryString.js';

class CardItem extends React.Component {

  //删除当前任务
  handlerDelete() {
    this.props.deleteList(this.props.index);
  }
  //改变任务是否已完成状态
  handlerChange() {
    this.props.changeListState(this.props.index,false);
    console.log(this.props,this.props.show)
    //show = false;  //操作其中一个list
  }

  edit(show) {
    if(!show){
      console.log(show)
      return(
        <div>
          <div className={styles.userInfo}>
            <span>{this.props.username}</span>
            <span>{this.props.cardnum}</span>
          </div>
          <div className={styles.bankInfo}>
            <span>{this.props.bank}</span>
            <span>{this.props.branch}</span>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <div className={styles.userInfo}>
          <input type="text" placeholder={this.props.username}/>
            <span>{this.props.cardnum}</span>
          </div>
          <div className={styles.bankInfo}>
            <span>{this.props.bank}</span>
            <span>{this.props.branch}</span>
          </div>
        </div>
      )
    }
  }

  render() {
    let className = this.props.isDone ? 'task-done' : '';
    console.log(this.props)
    return (
      <li>
        <div className={styles.list} key={this.props.index}>
          {this.edit(this.props.show)}
          <div className={styles.edit}>
            <span><Icon type="check-circle" />默认银行卡</span>
            <span onClick={this.handlerChange.bind(this)}><Icon type="edit" />编辑</span>
            <span ref="delButton" onClick={this.handlerDelete.bind(this)}><Icon type="delete" />删除</span>
          </div> 
        </div>
      </li>
    )
  }
}

export default CardItem;
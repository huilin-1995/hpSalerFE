import React,{ 
  Component 
} from 'react';
import {
  connect
} from 'react-redux';
import { 
  Popup, 
  List, 
  Button,
} from 'antd-mobile';
import styles from './Card.less';

export default class AddCard extends Component{
  //首次渲染之前
  componentWillMount() {
    console.log(11111111)
    this.props.dispatch({
      type: 'customerList/get',
       sel: ''
    });
  } 
  constructor(props){
    super(props); 
    console.log(props)
    this.state = {
      sel: '',
      animationType: 'slide-up'
    };
  }
  
   onClick() {
    Popup.show(
      <div  animationType={this.state.animationType}>
        <List renderHeader={() => (
          <div style={{ position: 'relative' }}>
            委托买入
            <span
              style={{
                position: 'absolute', right: 3, top: -5,
              }}
              onClick={() => this.onClose.bind('cancel')}
            >
              <Icon type="cross" />
            </span>
          </div>)
          }>
          <List.Item>股票名称</List.Item>
          <List.Item>股票代码</List.Item>
          <List.Item>买入价格</List.Item>
          <List.Item>买入数量</List.Item>
        </List>
        <ul style={{ padding: '0.18rem 0.3rem' }}>
          <li>投资说明投资说明...</li>
          <li style={{ marginTop: '0.18rem' }}>
            <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
          </li>
        </ul>
    </div>)
  }
  onClose(sel) {
    this.setState({ sel });
    Popup.hide();
  }
  render() {
    return (
      <div style={{ padding: '15px' }}>
        <Button type="ghost" onEndReached={this.onClick.bind(this)}>显示</Button>
      </div>
    )
  }
}






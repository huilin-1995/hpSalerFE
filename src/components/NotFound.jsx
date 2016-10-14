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



//ES6
class NotFound extends Component {
  render() {
    return (
      <PageResult
        imgUrl="https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png"
        title="系统繁忙"
        buttonTxt="重新加载"
        buttonClick={() => alert('点击了按钮')}
      />
    );
  }
}


function mapStateToProps({
  todos
}, {
  location
}) {
  return {
    todos: todos,
  };
}

export default connect(mapStateToProps)(NotFound);

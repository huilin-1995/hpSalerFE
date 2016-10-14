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


import MainLayout from '../layouts/MainLayout/MainLayout';


class App extends Component {
  render() {
    return (
      <MainLayout>
        {this.props.children}
      </MainLayout>
    );
  }

};

App.propTypes = {};

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(App);

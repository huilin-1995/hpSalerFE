import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const center = handleActions({
  ['center/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['center/get/success'](state, action) {
    return {...state,
      loading: false,
      income: action.income,
      user: action.user,
      imgurl: action.imgurl,
      point: action.point,
      pointNum: action.pointNum
    };
  },
  ['center/get/faild'](state, action) {
    return {...state
    };
  }
}, {
  loading: false
});

export default center;

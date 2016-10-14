import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const qcode = handleActions({
  ['qcode/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['qcode/get/success'](state, action) {
    return {...state,
      loading: false,
      popularize: action.popularize,
      QRCode: action.QRCode,
      img: action.img
    };
  },
  ['qcode/get/faild'](state, action) {
    return {...state
    };
  }
}, {
  loading: false
});

export default qcode;

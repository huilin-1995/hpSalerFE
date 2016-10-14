import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const setting = handleActions({
  ['setting/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['setting/get/success'](state, action) {
    return {...state,
      loading: false,
      user: action.user,
      shop: action.shop,
      slogan: action.slogan
    };
  },
  ['setting/get/change'](state, action) {
    return {...state,
      loading: true,
      user: action.user,
      shop: action.shop,
      slogan: action.slogan
    };
  },
  ['setting/get/faild'](state, action) {
    return {...state
    };
  }
}, {
  loading: false
});

export default setting;

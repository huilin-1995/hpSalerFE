import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const card = handleActions({
  ['cardList/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['cardList/get/success'](state, action) {
    return {...state,
      loading: false,
      cardList: action.cardList,
      show: true
    };
  },
  ['cardList/get/faild'](state, action) {
    return {...state
    }; 
  },
  ['addCard/get'](state, action) {
    return {...state,
      loading:true
    }; 
  },
  ['addCard/get/success'](state, action) {
    return {...state,
      loading: false,
    }; 
  },
  ['addCard/get/faild'](state, action) {
    return {...state,
      loading: false,
    }; 
  },
  ['editCard/get'](state, action) {
    return {...state,
      loading:true
    }; 
  },
  ['editCard/get/success'](state, action) {
    return {...state,
      loading: false,
      show:action.show,
      info: action.info
    }; 
  },
  ['editCard/get/faild'](state, action) {
    return {...state,
      loading: false,
    }; 
  }
}, {
  loading: false
});
export default card;

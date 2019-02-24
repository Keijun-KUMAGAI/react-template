import { combineReducers, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import ReactoTronConfig from './ReactoTronConfig'

const loginUser = async (dispatch, { email, password }) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v4/account/login', {
      attributes: {
        email,
        password,
      },
    })
    return dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data })
  } catch (err) {
    return dispatch({ type: 'LOGIN_USER_FAITURE', payload: err })
  }
}

export const actions = {
  loginUser,
}

const initialState = {
  user: {
    LogIn: false,
  },
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN_USER_SUCCESS':
    localStorage.setItem('userToken', action.payload.data.attributes.token)
    localStorage.setItem('userLogin', 'true')
    return {
      ...state,
      LogIn: true,
      userID: action.payload.data.attributes.user_id,
      userToken: action.payload.data.attributes.token,
    }
  case 'LOGIN_USER_FAITURE':
    // 何かしらのエラー発生のための通知
    localStorage.setItem('userToken', null)
    localStorage.setItem('userLogin', 'false')
    return { ...state }

  default:
    return state
  }
}

const reducers = combineReducers({ user: userReducers })

export const store = ReactoTronConfig.createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
)

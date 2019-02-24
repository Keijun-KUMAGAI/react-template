import React from 'react'
import './App.css'
import {
  BrowserRouter, Route, Link, Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import LoginScreen from './screens/LoginScreen'
import StaffChatScreen from './screens/StaffChatScreen'

import { store } from './store'


const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            component={() => ((localStorage.getItem('userLogin') === 'true') ? <Link to="/">HOME</Link> : <Redirect to={{ pathname: '/login' }} />)}
          />
          <Route
            path="/login"
            component={LoginScreen}
          />
          <Route
            path="/staff"
            component={() => ((localStorage.getItem('userLogin') === 'true')
              ? <StaffChatScreen />
              : <Redirect to={{ pathname: '/login' }} />)
            }
          />
        </div>
      </BrowserRouter>
    </Provider>
  </div>
)

export default App

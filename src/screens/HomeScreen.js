import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { actions } from '../store'

function HomeScreen() {
  return (
    <div>
      Home Screen
      <Link to="/login">Login</Link>
    </div>
  )
}

const styles = {
  main: {
    width: 'auto',
  },
}

const mapStateToProps = state => ({
  userState: state.user,
})

const mapDispatchToProps = dispatch => ({
  loginUser: async ({ email, password }) => actions.loginUser(dispatch, { email, password }),
})

const withStyle = withStyles(styles)(HomeScreen)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyle))

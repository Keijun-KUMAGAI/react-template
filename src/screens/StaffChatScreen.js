import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actions } from '../store'

function StaffChatScreen() {
  return (
    <div>
      Staff Only Screen
    </div>
  )
}

const mapStateToProps = state => ({
  userState: state.user,
})

const mapDispatchToProps = dispatch => ({
  loginUser: async ({ email, password }) => actions.loginUser(dispatch, { email, password }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StaffChatScreen))

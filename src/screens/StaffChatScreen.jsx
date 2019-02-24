import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
// import FormControl from '@material-ui/core/FormControl'
// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { actions } from '../store'
import StaffBar from '../components/StaffBar'


class StaffChatScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      // email: '',
      // password: '',
    }
  }

  async userLogin(email, password) {
    const { loginUser, history } = this.props
    await loginUser({ email, password })
    history.push('/staff')
  }

  render() {
    const { classes } = this.props
    // const { email, password } = this.state
    return (
      <main>
        <CssBaseline />
        <StaffBar />

        <Grid container>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} style={{ height: '60vh' }}>
                <Paper style={{ height: '90vh' }}>
                  <div
                    style={{ overflow: 'auto', height: '90vh' }}
                    // onScroll={_.throttle((event) => this.handleChatUsersScroll(), 500)}
                    // ref={chatUsers => this.chatUsers = chatUsers}
                  >
                    {/* <ChatUsers
                      handleSelectUser={(id) => this.handleSelectUser(id)}
                      selectedUser={selectedUser}
                      chatUsers={chatUsers.concat(additionalChatUsers)}
                    /> */}
                  </div>

                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <div
                  // className={classes.chatChatsRoot}
                  // onScroll={_.throttle((event) => this.handleChatChatsScroll(), 500)}
                  ref={(chatChats) => {
                    this.chatChats = chatChats
                  }}
                >
                  {/* <ChatChats
                    selectedUser={selectedUser}
                    chatChats={chatChats.sort((a, b) => a.send_at >= b.send_at ? 1 : -1)}
                    handleReadChat={() => this.handleReadChat()}
                    messageCurrentPage={messageCurrentPage}
                  /> */}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.chatSendRoot}>
                  {/* <ChatSend
                    handleAutoUsersReload={() => this.handleAutoUsersReload()}
                    handleMessageChanged={(message) => this.handleMessageChanged(message)}
                    inputMessage={message}
                    selectedUser={selectedUser}
                  /> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} style={{ height: '40vh' }}>
                <Paper style={{ padding: 20, height: '70vh' }}>
                  {/* {chatUserInfo && <UserInfo
                    data={chatUserInfo}
                  />} */}
                </Paper>
              </Grid>
              <Grid item xs={12} style={{ height: '20vh' }}>
                <Paper style={{ padding: 20 }}>
                  <div style={{ marginBottom: 10 }}>
                    <Button
                      color="primary"
                      // disabled={!chatUserInfo || pre_faq_created === 'created' || !selectedUser}
                      // onClick={() => {
                      //   this.setState({preFaqConfirmOpen: !preFaqConfirmOpen})
                      //   this.handleChatPreFaqDataGetter()
                      // }}
                    >
                      Q&Aは作成済みです
                    </Button>
                  </div>
                  <Button
                    color="primary"
                    // disabled={!chatUserInfo || !selectedUser}
                    // onClick={() => { this.setState({ templateOpen: true }) }}
                  >
                    テンプレートを利用する
                  </Button>
                </Paper>
                <Paper style={{ height: '30vh', padding: 20, overflow: 'auto' }}>
                  {/* <ChatUserFilter
                    handleUserFilter={async (searchQuery) => {
                      const newChatUsers = await this.handleChatUserSearch(searchQuery)
                      this.setState({chatUsers: newChatUsers.result})
                    }}
                    searching={searching}
                    organizationList={organizationList}
                  /> */}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    )
  }
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

const mapStateToProps = state => ({
  userState: state.user,
})

const mapDispatchToProps = dispatch => ({
  loginUser: async ({ email, password }) => actions.loginUser(dispatch, { email, password }),
})

const withStyle = withStyles(styles)(StaffChatScreen)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyle))

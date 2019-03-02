import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'

// import Channel from '../../modules/Channel';
// 以前まではchannelを使っていた模様、しかし使われていないor使い方が不適切であったため、一度使わないように変更
// 最終的にはchannelを使うようにする方が正しい。
import { connect } from 'react-redux'
// import _ from 'lodash'
// import { get, post } from '../../modules/Api';

class ChatSend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatSendConfirmDialogOpen: false,
      // chatSendSetRepresentativeDialogOpen: false,
      // channel: null,
      loginUser: {},
      // chatting: false,
      // chatSubmitted: false,
    }
  }

  componentDidMount() {
    // get(
    //   '/api/staff/users/login_user',
    //   data => this.setState({ loginUser: data.result }),
    // )
  }

  handleStartRepresentative() {
    // const { handleMessageChanged, selectedUser, handleAutoUsersReload } = this.props
    // get(
    //   `/api/staff/chat/representative/${selectedUser.id}`,
    //   (data) => {
    //     handleMessageChanged('')
    //     handleAutoUsersReload()
    //   },
    // )
    return this.props
  }

  handleFinishRepresentative() {
    // const { handleMessageChanged, selectedUser, handleAutoUsersReload } = this.props
    // get(
    //   `/api/staff/chat/representative/${selectedUser.id}/confirm`,
    //   (data) => {
    //     handleMessageChanged('')
    //     handleAutoUsersReload()
    //   },
    // )
    return this.props
  }

  handleSubmitChat() {
    // const {
    //   handleAutoUsersReload, handleMessageChanged, inputMessage, selectedUser,
    // } = this.props
    // post(
    //   `/api/staff/chat/messages/${selectedUser.id}`,
    //   { message: inputMessage, id: selectedUser.id },
    //   (data) => {
    //     handleMessageChanged('')
    //     handleAutoUsersReload()
    //     this.setState({ chatSendConfirmDialogOpen: false })
    //     this.props.openCheckedModal()
    //   },
    // )
    return this.props
  }

  render() {
    const {
      selectedUser,
      inputMessage,
      handleMessageChanged,
      // openCheckedModal,
    } = this.props
    const { loginUser, chatSendConfirmDialogOpen } = this.state
    const chatting = !selectedUser || selectedUser.representative_staff_id === loginUser.id
    // const throttled_handleSubmitChat = _.throttle(() => this.handleSubmitChat, 3000)
    return (
      <div>

        <Grid container justify="space-between">
          <Grid item>
            <Button
              disabled={!selectedUser}
              // color={chatting ? 'accent' : 'primary'}
              onClick={() => {
                if (chatting) {
                  this.handleFinishRepresentative()
                } else {
                  this.handleStartRepresentative()
                }
              }}
            >
              {chatting ? '担当を終了する' : '担当する'}
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end">
          <Grid item xs={9}>
            <TextField
              disabled={!chatting}
              fullWidth
              multiline
              label="メッセージ"
              value={inputMessage}
              helperText="「担当する」ボタンを押し、担当者となった後入力することができます。"
              onChange={event => handleMessageChanged(event.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              // fab
              disabled={!inputMessage || !chatting}
              color="primary"
              aria-label="send chat"
              onClick={() => this.setState({ chatSendConfirmDialogOpen: true })}
            >
              <SendIcon />
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={chatSendConfirmDialogOpen}
          onRequestClose={() => this.setState({ chatSendConfirmDialogOpen: false })}
        >
          <DialogTitle>この文面で送りますか</DialogTitle>
          <DialogContent>
            <Typography type="headline" headlineMapping={{ headline: 'div' }}>
              {inputMessage.split(/[\n]/g).map((line, ind) => <div key={ind}>{line}</div>)}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ chatSendConfirmDialogOpen: false })}>
              送らない
            </Button>
            <Button
              onClick={() => {
                // throttled_handleSubmitChat()
              }}
              color="primary"
            >
              送る
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ openCheckedModal: () => { dispatch({ type: 'TOGGLE_CHECKED_MODAL' }) } })

export default connect(null, mapDispatchToProps)(ChatSend)

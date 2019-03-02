import React from 'react'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import UserChatListItem from './UserChatListItem'

class UserChat extends React.Component {
  componentDidUpdate(prevProp) {
    const { messageCurrentPage } = this.props
    if (messageCurrentPage === 2 && this.messagesEnd) {
      return this.messagesEnd.scrollIntoView()
    }
    if (this[`chatChats${prevProp.chatChats[0].id}`]) {
      return this[`chatChats${prevProp.chatChats[0].id}`].scrollIntoView()
    }
    return true
  }

  render() {
    const { chatChats, selectedUser, handleReadChat } = this.props
    const hasUnreadChat = !!selectedUser && selectedUser.unread > 0
    return (
      <div>
        <List>
          {chatChats.map(chatChat => (
            <div
              ref={(el) => { this[`chatChats${chatChat.id}`] = el }}
              key={`chatChats${chatChat.id}`}
            >
              <UserChatListItem chatChat={[]} />
              ここにChatが入る
            </div>
          ))}
        </List>
        <div ref={(el) => { this.messagesEnd = el }}>
          <Grid container justify="center">
            <Grid item>
              {hasUnreadChat
                && (
                  <Button
                    disabled={!hasUnreadChat}
                    onClick={() => handleReadChat()}
                  >
                    既読にする
                  </Button>
                )}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default UserChat

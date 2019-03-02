import React from 'react'
// import withStyles from 'material-ui/styles/withStyles'
// import chatsStyles, {customStyle} from './chats.style'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import StaffIcon from '@material-ui/icons/Reply'
import UserIcon from '@material-ui/icons/Face'
import AndroidIcon from '@material-ui/icons/Android'
import UnknownIcon from '@material-ui/icons/HelpOutline'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Badge from '@material-ui/core/Badge'

const iconSwitch = (lastSenderType) => {
  switch (lastSenderType) {
  case 0:
    return (<UserIcon style={{ height: '0.8em' }} />)
  case 1:
    return (<StaffIcon style={{ height: '0.8em' }} />)
  case 2:
    return (<AndroidIcon style={{ height: '0.8em' }} />)
  default:
    return (<UnknownIcon style={{ height: '0.8em' }} />)
  }
}

const UserList = (props) => {
  const { chatUsers, handleSelectUser, selectedUser } = props
  if (!chatUsers) return null
  return (
    <List>
      対象ユーザー数:
      {chatUsers.length}
      {chatUsers.map((chatUser) => {
        const {
          id,
          firstName,
          lastName,
          lastMessage,
          lastSenderType,
          lastAt,
          representative,
          unread,
        } = chatUser
        const fullName = `${lastName} ${firstName}`
        return (
          <ListItem
            key={id}
            divider
            button
            onClick={() => handleSelectUser(id)}
            style={{ backgroundColor: (selectedUser && selectedUser.id === id) ? 'gray' : 'white' }}
          >
            <ListItemText
              disableTypography
              secondary={(
                <div>
                  { fullName }
                  { (unread && unread > 0)
                    ? (
                      <Badge badgeContent={unread}>
                        <ChatBubbleOutline style={{ height: '0.8em' }} />
                      </Badge>
                    )
                    : null}
                  <Typography type="body2" headlineMapping={{ headline: 'div' }}>
                    { iconSwitch(lastSenderType) }
                    { lastMessage }
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Typography type="caption">
                      { lastAt }
                    </Typography>
                    {representative}
                  </div>
                </div>
              )}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

// export default withStyles(chatsStyles)(UserList)
export default UserList

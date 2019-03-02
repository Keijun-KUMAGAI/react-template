/* eslint camelcase: "off" */

import React from 'react'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import {
//   ChatSenderIcon,
//   ChatDisplayStaffName,
//   ChatImageThumbnail,
//   Style as customStyle,
// } from './'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const senderType = {
  user: 0,
  staff: 1,
  bot: 2,
}

class UserChatListItem extends React.Component {
  backgroundColor() {
    const { chatChat } = this.props
    const { sender_type, flag_staff_talking } = chatChat
    if (sender_type === senderType.user && flag_staff_talking) {
      // return ( customStyle.backgroundColorRed )
    } else if (sender_type === senderType.staff) {
      // return ( customStyle.backgroundColorBlue )
    }
    return {}
  }

  render() {
    const formattedMessage = (message) => {
      if (!message) return ''
      return message.split(/[\n]/g).map(line => (
        <Typography type="body1" key={line}>
          {line}
        </Typography>
      ))
    }
    const { chatChat } = this.props
    const {
      // id,
      message,
      // representative_name,
      send_at,
      // sender_type,
      // staff_name,
      // flag_staff_talking,
      // chat_images,
    } = chatChat

    return (
      <ListItem divider dense style={this.backgroundColor()}>
        {/* <ListItemIcon>
          <ChatSenderIcon
            sender_type={sender_type}
            flag_staff_talking={flag_staff_talking}
          />
        </ListItemIcon> */}
        <ListItemText
          disableTypography
          primary={(
            <Typography type="body2">
              {formattedMessage(message)}
            </Typography>
          )}
          secondary={(
            <div>
              <Grid container alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={8}>
                    <Grid item>
                      <AccessTimeIcon />
                      {/* <AccessTimeIcon style={customStyle.icon1emSize} /> */}
                    </Grid>
                    <Grid item>{send_at}</Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* <ChatDisplayStaffName
                    sender_type={sender_type}
                    staff_name={staff_name}
                  /> */}
                </Grid>
                <Grid item>
                  {/* {chat_images.map((chat_image, index) => (
                    <div key={index}>
                      <ChatImageThumbnail { ...chat_image } />
                      画像あり
                    </div>
                  ))} */}
                </Grid>
              </Grid>
            </div>
          )}
        />
      </ListItem>
    )
  }
}

export default UserChatListItem

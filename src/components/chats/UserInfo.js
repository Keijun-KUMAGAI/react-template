/* eslint camelcase: "off" */
import React from 'react'

class UserInfo extends React.Component {
  personalType(info) {
    // if (info.personal_type === 'organizational') {
    //   return '団体会員' + '(' + info.organization_name + ')';
    // } else if (info.personal_type === 'personal') {
    //   return '個人会員';
    // } else {
    //   return;
    // }
    // console.log(info)
    this.info = info
    return 'Wow'
  }

  render() {
    const { data } = this.props
    const {
      last_name,
      first_name,
      id,
      sex,
      birthdate,
      postcode,
      email,
      staff_chat_count,
      next_reset_date,
      chat_available_to,
      sp_charge_type,
      chat_available_from,
    } = data

    return (
      <div className="userInfo">
        <table key={id}>
          <tbody>
            <tr>
              <td className="tdTitle">名前</td>
              <td>{`${last_name} ${first_name}`}</td>
            </tr>
            <tr>
              <td className="tdTitle">会員種別</td>
              <td>{ this.personalType(data) }</td>
            </tr>
            <tr>
              <td className="tdTitle">性別</td>
              <td>{sex}</td>
            </tr>
            <tr>
              <td className="tdTitle">生年月日</td>
              <td>{birthdate}</td>
            </tr>
            <tr>
              <td className="tdTitle">郵便番号</td>
              <td>{postcode}</td>
            </tr>
            <tr>
              <td className="tdTitle">メールアドレス</td>
              <td>
                <div>{email ? email.slice(0, 20) : null}</div>
                <div>{((!!email) && email.length > 20) ? email.slice(20, 40) : null }</div>
                <div>{((!!email) && email.length > 40) ? email.slice(40, 60) : null }</div>
              </td>
            </tr>
            <tr>
              <td className="tdTitle">看護師相談 残回数</td>
              <td>{staff_chat_count}</td>
            </tr>
            <tr>
              <td className="tdTitle">看護師相談回数 回復日</td>
              <td>{next_reset_date}</td>
            </tr>
            <tr>
              <td className="tdTitle">お試し期限 / プラン更新日</td>
              <td>{chat_available_to}</td>
            </tr>
            <tr>
              <td className="tdTitle">基本プラン</td>
              <td>{sp_charge_type}</td>
            </tr>
            <tr>
              <td className="tdTitle">チャット利用開始日</td>
              <td>{chat_available_from}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserInfo

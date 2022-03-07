import React, { useContext, useState } from 'react'
import { Col, Divider, Row } from 'antd';
import './profile.css'
import { UserContext } from '../../context/userContext'
import { EditOutlined } from '@ant-design/icons';
import ProfileInfo from './profileInfo';
import EditProfile from './editProfile';
function Profile() {
  const { user ,setUser} = useContext(UserContext);
  const [edit, setEdit] = useState(false)

  console.log(user)
  return (
    <div className='profile' id="profile">
      <h2>{user.name} </h2>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        {!edit ?
            <ProfileInfo user={user} setEdit={setEdit} />
            :
            <EditProfile setEdit={setEdit} user={user} setUser={setUser} />
          }
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className='last'></div>
        </Col>
      </Row>
    </div>
  )
}
export default Profile
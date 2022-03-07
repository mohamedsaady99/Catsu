import React from 'react'
import { Divider } from 'antd';
import './profile.css'

import { EditOutlined } from '@ant-design/icons';
function ProfileInfo({ user, setEdit }) {
  return (
    <div className='profile-info'>
      <img alt="profile" src={user.imageUrl} className="profile-img" />
      <p><i className="ri-user-fill icon"></i> <span>{user.name}</span>  </p>
      <p><i className="ri-mail-line icon"></i> <a href={`mailto:${user.email}`}>{user.email}</a> </p>
      <Divider />
      <p className='edit'><EditOutlined key="edit" onClick={() => setEdit(true)} /></p>
    </div>
  )
}

export default ProfileInfo
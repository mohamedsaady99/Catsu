import { Dropdown, Menu } from 'antd';
import Login from '../login/login';
import Logout from '../logout/logout';
import './navbar.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {

  const [current, setCurrent] = useState()
  const token = localStorage.getItem("token")

  const handleClick = e => {
    setCurrent({ current: e.key });
  };

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Logout />
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='navbar' id="up">
      <NavLink to="/" rel="noopener noreferrer" className='brand'> <span>C</span>atsu</NavLink>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="food" >
          <a href="#food" rel="noopener noreferrer">CAT FOOD  </a>
        </Menu.Item>
        <Menu.Item key="litter" >
          <a href="#litter" rel="noopener noreferrer">LITTER BOX  </a>
        </Menu.Item>
        <Menu.Item key="breeds">
          <a href="#breeds" rel="noopener noreferrer"> CAT BREEDS  </a>
        </Menu.Item>
        <Menu.Item key="gallary" >
          <a href="#gallary" rel="noopener noreferrer">gallary   </a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="#about" rel="noopener noreferrer"> ABOUT  </a>
        </Menu.Item>
        <Menu.Item key="contct">
          <a href="#contact" rel="noopener noreferrer"> contact  </a>
        </Menu.Item>
        <Menu.Item key="login" className='sign'>
          {token ?
            <Dropdown overlay={menu} >
              <i className="ri-user-line"></i>
            </Dropdown>
            : <Login />
          }
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar  
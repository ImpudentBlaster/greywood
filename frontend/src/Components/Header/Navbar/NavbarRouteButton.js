import React from 'react'
import { Button, Dropdown } from 'antd';
import './Navbar.css'
import { ConfigProvider } from 'antd';

function NavbarRouteButton() {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ];

  return (
    <>
  
    <div className='hidden gap-10  lg:flex'>
     <div className='text-white'>Home</div>
     <div className='text-white'>About Us</div>
     <ConfigProvider
     theme={
       {
         token:{
           fontFamily:"sans-serif",
           fontSize:"1rem",
          }
        }
      }
     >

     <Dropdown
    
    menu={{
      items: items.map(item => ({
          ...item,
          style: { padding: "10px" }, 
        })),
      }}
      placement="bottom"
      ><Button  className='dropDownButton bg-transparent text-white'>All Categories</Button>
      </Dropdown>
      </ConfigProvider>
     <div className='text-white'>Contact Us</div>
    </div>
          </>
  )
}

export default NavbarRouteButton
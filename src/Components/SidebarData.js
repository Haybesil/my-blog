import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdContacts />,
        cName: 'nav-text'
      },
      {
        title: 'Write',
        path: '/write',
        icon: <BsIcons.BsFillPenFill />,
        cName: 'nav-text'
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
      },
      {
        title: 'Log-in',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
      },
      {
        title: 'Register',
        path: '/register',
        icon: <GiIcons.GiEntryDoor />,
        cName: 'nav-text'
      },
      {
        title: 'Profile',
        path: '/settings',
        icon: <BsIcons.BsFillPersonFill />,
        cName: 'nav-text'
      },
      {
        title: 'Search',
        path: '/',
        icon: <BsIcons.BsSearch />,
        cName: 'nav-text'
      }
    ];
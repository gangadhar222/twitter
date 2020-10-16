import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { GrTwitter } from 'react-icons/gr';
import {AiOutlineHome} from 'react-icons/ai'
import {MdNotificationsNone} from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
import {RiFileList2Line} from 'react-icons/ri'
import {BiBookmark} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {CgMoreO} from 'react-icons/cg'
import Sidebaroptions from './Sidebaroptions'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <GrTwitter />
            <Sidebaroptions Icon={AiOutlineHome} text="Home" />
            <Sidebaroptions Icon={RiSearchLine} text="Explore" />
            <Sidebaroptions Icon={MdNotificationsNone} text="Notifications" />
            <Sidebaroptions Icon={FiMail} text="Messages" />
            <Sidebaroptions Icon={BiBookmark} text="Bookmarks" />
            <Sidebaroptions Icon={RiFileList2Line} text="Lists" />
            <Sidebaroptions Icon={BsPerson} text="Profile" />
            <Sidebaroptions Icon={CgMoreO} text="More" />
        </div>
    )
}

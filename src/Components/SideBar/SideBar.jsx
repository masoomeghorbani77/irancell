import React from "react";
import './SideBar.css'


import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";

export default function SideBar(){
    return (
        <div className="sidBar">
        <div className="sidebarWrapper">
      <h3 className="title"> ایرانسل من</h3>
          <div className="sidebarMenu">
 
            <h3 className="sidebarTitle">
            
                 </h3>
 
               <ul className=" sidebarList">
                 <Link to='/' className='Link'>
                 <li className="sideBarListItem-active">
                     <LineStyleIcon className="sideBarIcon"/>
                     صفحه اصلی
                 </li>
                 </Link>
                 <li className="sideBarListItem">
                     <TimelineIcon className="sideBarIcon"/>
                     شارژ سیم کارت
                 </li>
 
                 <li className="sideBarListItem">
                     <TrendingUpIcon className="sideBarIcon"/>
                     اینترنت
                 </li>

                 <li className="sideBarListItem">
                     <TrendingUpIcon className="sideBarIcon"/>
                     کارکرد و فروش
                 </li>

                 <li className="sideBarListItem">
                     <TrendingUpIcon className="sideBarIcon"/>
                     خدمات
                 </li>
            </ul>
         </div>

         <div className="sidebarMenu">
 
 <h3 className="sidebarTitle">
     سرویس ها
      </h3>

    <ul className=" sidebarList">
   
      <li className="sideBarListItem">
          <PermIdentityIcon className="sideBarIcon"/>
          مدیریت خدمات
      </li>
      
      
      <li className="sideBarListItem">
          <PersonOutlineIcon className="sideBarIcon"/>
          مدیریت سیم کارت
      </li>
      

      

 </ul>

</div>


<div className="sidebarMenu">
 
 <h3 className="sidebarTitle">
     
      </h3>

    <ul className=" sidebarList">

      <li className="sideBarListItem">
          <MailOutlineIcon className="sideBarIcon"/>
          سوالات متداول
      </li>

      <li className="sideBarListItem">
          < DynamicFeedIcon className="sideBarIcon"/>
          ارتباط با ما
      </li>

      

     
 </ul>

</div>




       </div>
     </div>

    ) 

}
import React from "react";
import { useState } from "react";
import './ItemsBlog.css'
import Account from "./Account/Account";
const ItemsBlog = ({ title, time, img, users }) => {
     const[user, setUser] = useState('')
     return (
          <li className="blog_content_item">
               <div className="blog_content_item_img">
                    <img src={ img } alt="Images" />
               </div>
               <div className="blog_content_item_body">
                    <h3>{ title }</h3>
                    <Account
                         acc={user}
                         name={'James Adams'}
                         src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU'}
                         proffesion={'Web Developer'}
                    />
                    <span className="time">&#9201; { time }<p>Minutes</p></span>
               </div>
          </li>
     );
};

export default ItemsBlog;

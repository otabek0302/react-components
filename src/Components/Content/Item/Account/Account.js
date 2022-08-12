import React from "react";
import '../ItemsBlog.css'
const Account = ({ name, src, proffesion, user }) => {
     console.log(user);
     return(
          <div className="account">
               <img src={src} alt="" />
               <div className="account_box">
                    <div className="name">{ name }</div>
                    <div className="profesion">{ proffesion }</div>
               </div>
          </div>
     )
};

export default Account;

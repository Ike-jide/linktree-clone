import React from "react";
import './Profile.css'

function Profile(){
    return(
        <div className="profile_img">
            <img src="./images/profile__img.png" alt="" className="profile__img" id="profile__img"/>
            <h2 id='twitter'>Pao Ike</h2>
            {/*<span id="slack">Harry Ike</span>*/}
            
        </div>
    )
}
export default Profile;
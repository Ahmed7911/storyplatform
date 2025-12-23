import React from "react";

export default function UserProfileIcon({userName , profilePicUrl}) {
    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img 
                src={profilePicUrl}
                alt={`${userName}'s profile`}
                style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px'}}
            />
            <span style={{fontFamily: 'Arial', fontSize: '16px', color: '#333333'}}>{userName}</span>
        </div>
    )
}
 
import React from "react";

export default function Button({ label, onClick, disabled , fontColor , backgroundColor , hoverColor_btn,alighnment})  {
    return (
        <button style={{position: 'relative',
            cursor: disabled ? 'not-allowed' : 'pointer',
            left: '0%',
            right: '1.97%',
            top: '1.79%',
            bottom: '0%',
            width: '150px',
            height: '40px',
            color: '#FFFFFF',
            fontFamily: 'Arial',
            fontSize: '16px',
            fontWeight: 'bold',
            background: '#1E1E1E',
            borderRadius: '12px',
            padding: '10px 20px',
            textAlign: alighnment || 'center',
            color: fontColor,
            backgroundColor: backgroundColor ,
            hoverColor: hoverColor_btn      
           }} onClick={onClick} disabled={disabled} >
            {label}
        </button>
    )
}
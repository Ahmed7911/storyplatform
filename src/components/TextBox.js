import React from "react";

export default function TextBox({ value = "", onChange = () => {}, placeholder = "Enter text...",width='90%' , height='40px', labelText="" ,inputType})  {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px',padding:'8px 12'}}>
            {labelText && <label style={{ fontSize: '14px', fontWeight: '500' }}>{labelText}</label>}
        <input type={inputType} value={value} onChange={onChange} placeholder={placeholder} 
        style={{ width , height, padding: '8px 12px', fontSize: '18px', borderRadius: '8px', border: '1px solid #ccc', textAlign:'left' }} />
       </div>
    );
}
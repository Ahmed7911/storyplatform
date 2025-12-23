import React from "react";
import ProgressBar from "./ProgressBar";

export default function MainCard({ companyLogoUrl,companyName, jobTitle,appStatus, appliedDate}) {
    return (
        <div style={{
    position: 'relative',
width: '350px',
height: '300px',
background: '#FFFFFF',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
borderRadius: '16px',
padding: '16px',
margin: '16px'
}}>
    <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{alignSelf:'right' , right:'3px', backgroundColor:'red' , width : '40px' , height:'40px' , marginBottom:'8px' }}>
                 <img src={companyLogoUrl} alt={`${companyName} logo`} style={{width:'100%' , height:'100%' , objectFit:'cover' , borderRadius:'8px'}} />
            </div>
            <div style={{fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', color: '#333333', textAlign:'left'}}>
                {companyName}
            </div>
            </div>
            <div style={{fontFamily: 'Arial', fontSize: '18px', color: '#0c0c0cff', marginTop: '8px' ,textAlign:'center'}}>
                {jobTitle}
            </div>
            <div style={{fontFamily: 'Arial', fontSize: '14px', color: '#615f5fff', marginTop: '8px'}}>
                <strong style={{color:'black'}}>Status:</strong> {appStatus}
            </div>
            <div style={{fontFamily: 'Arial', fontSize: '14px', color: '#615f5fff', marginTop: '8px'}}>
                <strong style={{color:'black'}}>Applied on:</strong> {appliedDate}
</div>
{appStatus==="Applied" && <ProgressBar progress={25} progressHeight={"10px"} />}
{appStatus==="Phone Screen" && <ProgressBar progress={50} />}
{appStatus==="Interview Scheduled" && <ProgressBar progress={75} />}
{appStatus==="Offer Received" && <ProgressBar progress={100} />}
        </div>
    )
}
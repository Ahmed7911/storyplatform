import React from "react";
import Button from "./Button";

export default function SearchBar(){
    return(
        <div style={{flexDirection:"row" , padding:"10px", maxWidth:"fit-content" , position: "relative"}}>
            <input
                type="text"
                placeholder="Search jobs..."
                style={{
                    width: '300px',
                    height: '25px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                }}
            />
            <Button label={"Search"} onClick={() => alert("Searching...")} disabled={false} fontColor={'black'} backgroundColor={'white'}/>
        </div>
    )
}
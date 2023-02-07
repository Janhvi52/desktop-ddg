import React from 'react'
import {useDrag} from "react-dnd";
import './Pictures.css'; 

function Picture({id,url}) {
  
    const [{isDragging}, drag]=useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    const opacity= isDragging?0:1;
  return (
    
<img ref={drag} src={url} width="9%" style={{ opacity}}/>

    )
 
    
}

export default Picture
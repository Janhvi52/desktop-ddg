import React, { useState } from 'react'
import Picture from './Picture'
import {useDrop} from "react-dnd";
import './Pictures.css';
import './DragDrop.css';

const pictureList=[
  {
    id:1,
    url:"/images/icecube.png"
  },
]
const pictureList1=[
  {
    id:2,
    url:"/images/bgwhiskey.png"
  },
]
const pictureList2=[
  {
    id:3,
    url:"/images/bgsoda.png"
  },
]
const pictureList3=[
  {
    id:4,
    url:"/images/bgcola.png"
  },
]
const pictureList4=[
  {
    id:5,
    url:"/images/lemon.png"
  },
]
const pictureList5=[
  {
    id:6,
    url:"/images/bgorange.png"
  },
]
function DragDrop() {
  const [board, setBoard]=useState([ ]);
  const [{isOver},drop]= useDrop(()=>({
    accept:"image",
    drop:(item)=>addImageToBoard(item.id),
    collect:(monitor)=>({
          isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard=(id)=>{
    const PictureList= pictureList.filter((picture)=> id===picture.id);
    setBoard((board)=> [...board,PictureList[0]]);
    // const PictureList1= pictureList1.filter((picture)=> id===picture.id);
    // setBoard((board)=> [...board,PictureList1[0]]);
    // const PictureList2= pictureList2.filter((picture)=> id===picture.id);
    // setBoard((board)=> [...board,PictureList2[0]]);
    // const PictureList3= pictureList3.filter((picture)=> id===picture.id);
    // setBoard((board)=> [...board,PictureList3[0]]);
    // const PictureList4= pictureList4.filter((picture)=> id===picture.id);
    // setBoard((board)=> [...board,PictureList4[0]]);
    // const PictureList5= pictureList5.filter((picture)=> id===picture.id);
    // setBoard((board)=> [...board,PictureList5[0]]);
  };

  return (
    <React.Fragment>
     <header className="header">
          <div className="head-image">
            <img
              src={"/images/bgheader.png"}
              style={{ display: "inline", width: "100vw", height: "100px" }}
            ></img>
          </div>
          <div className="text">
            <h3>
              To complete your Highball
              <br />
              Choose the Right
              <br />
              Whiskey, Mixer and Garnish!
            </h3>
          </div>
        </header>
    {/* <img ref={drop} width="10%" style={{ border: isOver? "5px solid black":"0px"}}/> */}
    <div className='main'>
    <div className='board' ref={drop}>
          <img src='/images/bglass.png' alt=''></img>
          <div className='text-under-image'>
    <h6 > ESTD 1886</h6>
    <h3>ROYAL CHALLENGE</h3>
    <h2>AMERICAN</h2>
    <h2>—PRIDE—</h2>
</div>
          {board.map((picture)=>{
            return <Picture url={picture.url} id={picture.id}/>
          })}
        </div>
        <div className='pictures'>
        <div className='pictures1'> {pictureList.map((picture)=> {
          return  <React.Fragment>
          <Picture url={picture.url} id={picture.id}/>
          <h3>ICE CUBES</h3>
          </React.Fragment>
           })}
           </div>
           <div className='pictures2'> {pictureList1.map((picture)=> {
          return  <React.Fragment>
          <Picture url={picture.url} id={picture.id}/>
          <h3>WHISKEY</h3>
          </React.Fragment>
           })}
           </div>
           <div className='wrap1'>
           <div className='pictures3'> {pictureList2.map((picture)=> {
          return  <React.Fragment>
          <Picture url={picture.url} id={picture.id}/>
     
          </React.Fragment>
           })}
           </div>
           <div className='pictures4'> {pictureList3.map((picture)=> {
          return  <React.Fragment>
          <Picture url={picture.url} id={picture.id}/>
          </React.Fragment>
           })}
           </div>
           </div>
           <h3>MiIXERS</h3>
           <div className='wrap2'>
           <div className='pictures5'> {pictureList4.map((picture)=> {
          return  <React.Fragment>
          <Picture url={picture.url} id={picture.id}/>
          </React.Fragment>
           })}
           </div>
           <div className='pictures6'> {pictureList5.map((picture)=> {
          return <Picture url={picture.url} id={picture.id}/>
           })}
         
           </div>
           </div>
           <h3>GARNISHES</h3>
        </div>
       
    </div>
    
       
    </React.Fragment>
  )
}

export default DragDrop
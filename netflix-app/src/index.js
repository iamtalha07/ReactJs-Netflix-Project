import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

// const ncard = (val) => {           //MAP FUNCTION
  
//   return(
//     <Card 
//       imgsrc={val.imgsrc}
//       titles={val.titles}
//       sname={val.sname}
//       link={val.link}
//     /> 
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top Netflix Series in 2021</h1>
   {Sdata.map(
    
    (val,index,arr)=>{
    console.log(val); 
    return(
      <Card 
        imgsrc={val.imgsrc}
        titles={val.titles}
        sname={val.sname}
        link={val.link}
      /> 
          );
   })}

  </>,
  document.getElementById('root')
);



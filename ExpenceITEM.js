import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";
import { useState } from 'react';


const Expence = (dat) => {

  const [title , setExpenses] = useState(dat.title);
  
  const update = () =>{
    setExpenses("updated");
  } 

  return (
    <Card className="mainClass">
      <div className="expence-item">
        <div>
         <DateFormat
         date = {dat.date} //its pros here .. 
         ></DateFormat>
        </div>
        <div className="expence-item__description">{title}
        <div className="expence-item__price">${dat.price}</div></div>
        
          {/* addding eventlistner here  */}
        <button className="changeTitle" onClick={update}>Update</button>
    
      </div>
    </Card>
  );
}

export default Expence;


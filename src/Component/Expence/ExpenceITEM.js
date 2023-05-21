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

{  dat.item.map(expence => 
  <div className="expence-item">

        <div>
        
         <DateFormat
         date = {expence.date} //its pros here .. 
         ></DateFormat>
        </div>
        <div className="expence-item__description">{expence.title}
        <div className="expence-item__price">${expence.price}</div></div>
        
          {/* addding eventlistner here  */}
        <button className="changeTitle" onClick={update}>Update</button>
    
      </div>

)}

     
    </Card>
  );
}

export default Expence;


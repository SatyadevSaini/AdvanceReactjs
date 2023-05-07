import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";
import { useState } from 'react';

const Expence = (data) => {

  const [title , setExpenses] = useState(data.title);

  const update  = () => {

    console.log(data.id);
    setExpenses(  "updated !");
  
    }

  return (
    <Card className="mainClass">
      <div className="expence-item">
        <div>
         <DateFormat
         date = {data.date} //its pros here .. 
         ></DateFormat>
        </div>
        <div className="expence-item__description">{title}
        <div className="expence-item__price">$ {data.price}</div></div>
        
          {/* addding eventlistner here  */}

        <button className="changeTitle" onClick={update}>Update Title</button>
    
      </div>
    </Card>
  );
}

export default Expence;


import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";
import { useState } from 'react';


const Expence = (dat) => {

  const [title , setExpenses] = useState(dat.title);
  
  const update = () =>{
    setExpenses("updated");
  } 

  //************************Method for Filtering the Data here********************************** USeState will be used ********
        const [currentYear , updatedYear]  =     useState('2019')    

  const ChangeTheYear = (e) => {
    console.log("Filtered Elements here")
    console.log(e.target.value);  // how to get value from the drop down here....
    updatedYear(e.target.value); // selected year intp update 
  }

 const filteredYear =   dat.item.filter( (element)  => {
      return element.date.getFullYear().toString() === currentYear;  // the year which we will select only fiter those 
    })
    
   
  

  return (
    <Card className="mainClass">

     <div className="filtermain" >
    <div className="filter">
    <h2 >FILTERED BY YEAR   </h2> 
     </div>
     
   

<div className="filterSelect">
<select value={currentYear} onChange={ChangeTheYear} >
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
</select>
</div>
 </div>

{  filteredYear.map((expence , index) => 
  <div className="expence-item" key = {expence.id}>
        
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


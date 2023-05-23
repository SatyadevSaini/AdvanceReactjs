import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";
import { useState } from 'react';


const Expence = (dat) => {

 

  //************************Method for Filtering the Data here********************************** USeState will be used ********
        const [currentYear , updatedYear]  =     useState('2018')    

  const ChangeTheYear = (e) => {
    console.log("Filtered Elements here")
    console.log(e.target.value);  // how to get value from the drop down here....
    updatedYear(e.target.value); // selected year intp update 
  }

 const filteredYear =   dat.item.filter( (element)  => {
      return element.date.getFullYear().toString() === currentYear;  // the year which we will select only fiter those 
    })






    












    //**************condition for  filtered element is empty or not ********************

    let expenceContent = <h2>NO EXPENCE FOUNDS </h2>;

    if(filteredYear.length > 0 ){
      expenceContent = filteredYear.map((expence , index) => 
      <div className="expence-item" key = {expence.id}>
            
            <div>
        
             <DateFormat
             date = {expence.date} //its pros here .. 
             ></DateFormat>
            </div>
            <div className="expence-item__description">{expence.title}
            <div className="expence-item__price">${expence.price}</div></div>
          
          </div>
    
    )
    }
    



   
  

  return (
    <Card className="mainClass">

     <div className="filtermain" >
    <div className="filter">
    <h2 >FILTERED BY YEAR   </h2> 
     </div>
     
<div className="filterSelect">
<select value={currentYear} onChange={ChangeTheYear} >
<option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  

</select>  
</div>
 </div> <br></br>


{/* Condition Rerendering if there is No element then print the message no expence found  */}

  { expenceContent }  

    </Card>
  );
}

export default Expence;


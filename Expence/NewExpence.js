
import React, { useState } from "react";
import ExpenceForm from "./ExpenseForm";



const NewExpenceHere = (props) =>{

const SaveNewExpenceDataHere = (dataHere) =>{

  const NewExpenceData =  {
    ...dataHere , id : Math.random().toString()
  };
  console.log("New Expence Hereeeee....... it is NewExpence1")
  console.log(NewExpenceData);


  // send object to app.js from NewExpence.js ....
  props.gotoAppDotJS(NewExpenceData);  
  props.sendMyDetails("Satyadev , Sukeri , BCA , ProductBased , 900000 , DTE ");

};


     const [isEditing , setEditing] = useState(false);

     //change false to true 
           const startEditHandler = () => {
            setEditing(true);
           };
      
    return (               
        <div>
           
  {/* its afunction here which will be excute into ExpenceForm.js but written here we will pass there another function for our work */}
          
       { !isEditing && <button onClick={startEditHandler} > Add New Expence</button>}

         { isEditing && <ExpenceForm  onDataSave = {SaveNewExpenceDataHere}  /> }
        </div>
     );
};

export default NewExpenceHere;
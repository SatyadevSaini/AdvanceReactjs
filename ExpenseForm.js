//import { data } from "../../App";

import React from "react";
//import DateFormat from "./Expence/DateFormat";
import "./ExpenceForm.css";
import { useState } from "react";


const MyForm = () =>{

    // manage the Multiple useState here ..

    // const[setTitleHere , setUpdatedTitile] = useState(" ");
    // const[setpriceHere , setUpdatedPrice] = useState(" ");
    // const[setDateHere , setUpdatedDate] = useState(" ");

    // now Do It with only one State using the Object here .....
    
    const[setDataHere , setUpdatedData] = useState(
        {
            Entertitle:"" , 
            Enterprice:"",
            Enterdate:""

        }
    );

    


    const  getTitleHere = (event) =>{
        //  setUpdatedTitile(event.target.value);
        setUpdatedData( (prevValue) => {
          return{ ...prevValue , Entertitle:event.target.value}   
        });
    }

    const  getPriceHere = (event) =>{
        // setUpdatedPrice(event.target.value);
        setUpdatedData( (prevValue) => {
            return{ ...prevValue , Enterprice:event.target.value}   
          });
    }

    const  getDateHere = (event) =>{
        // setUpdatedDate(event.target.value);
        setUpdatedData( (prevValue) => {
            return{ ...prevValue , Enterdate:event.target.value}   
          });
    }

    //Form Submit Hnadler here .
    const SubmitFormHandler = (event) => {
       event.preventDefault();

   const expenceData =  
    {
        prices : setDataHere.Enterprice,
        titles : setDataHere.Entertitle,
        dates : new Date(setDataHere.Enterdate)

       };

       console.log(expenceData);

    };
    
    return(
         
        <div className="formdiv">
       <div className="title"> <h1>Expence Form</h1></div> 
        <form onSubmit={SubmitFormHandler}>

        <div className="id_title">
    
       <div>
       <label> TITLE: <input  className="heighttext"  type="text" onChange={getTitleHere}></input></label>
       </div>   
          </div>

        <div className="price_date">
        <div>
        <label> PRICE: <input  className="heighttext"  type="number" onChange={getPriceHere}></input></label>  
        </div>
        
        <div>
        <label> DATE:  </label> <input  className="heighttext"  type="date" min="2020-01-01"   max="2023-01-06"  
        onChange={getDateHere}>
        </input>  
        </div>

        </div>

        <div className="btn">   <button className="button" type="submit">SUBMIT</button> </div>

        </form>
        </div>

    );
}

export default MyForm;
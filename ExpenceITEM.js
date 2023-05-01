import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";

const Expence = (data) => {

  const deleteItem = () =>{
    console.log(data.id);
  }


  return (
    <Card className="mainClass">
      <div className="expence-item">
        <div>
         <DateFormat
         date = {data.date} //its pros here .. 
         ></DateFormat>
        </div>
        <div className="expence-item__description">{data.title}
        <div className="expence-item__price">$ {data.price}</div></div>
        
          {/* addding eventlistner here  */}

        <button className="changeTitle" onClick={deleteItem}>delete</button>
    
      </div>
    </Card>
  );
}

export default Expence;


//import logo from "./logo.svg";
import "./App.css";
import Expence from "./Component/Expence/ExpenceITEM";
import NewExpenceHere from "./Component/Expence/NewExpence";

 export const data = [
  {
    id:1,
    date: new Date(2021, 3, 23),
    title: "insurance here",
    price: 450,
  },
  {
    id:2,
    date: new Date(2021, 5, 23),
    title: "ksjk here",
    price: 4560,
  },
  {
    id:3,
    date: new Date(2021, 9, 23),
    title: "hweujiol here",
    price: 4506,
  },
  {
    id:4,
    date: new Date(2021, 7, 23),
    title: "sjkjksjkjik here",
    price: 45880,
  },
  {
    id:5,
    date: new Date(2021, 12, 23),
    title: "tututijhjs here",
    price: 99450,
  },
  {
    id:6,
    date: new Date(2021, 1, 8),
    title: "tututijhjs here",
    price: 99450,
  },
  {
    id:7,
    date: new Date(2021, 4, 13),
    title: "tututijhjs here",
    price: 99450,
  },
  {
    id:8,
    date: new Date(2021, 2, 3),
    title: "tututijhjs here",
    price: 99450,
  },
];

const  App = () => {

  // *********IMPORTANT *********************

  // it will remove the element from the array where id=2 
  // const  newArray  =  data.filter(obj => obj.id !== 2);
  // console.log(newArray);

   const functionForPrintingNewExpence = (data) => {
        
    console.log('Data Print On App.js');
    console.log(data);

   }

    //working properrly we are able to send details able to interchange details..
   const printMyDetails = (details) => {
     console.log(details);
   }

  return (
     
    <div>
     <NewExpenceHere  gotoAppDotJS = {functionForPrintingNewExpence}
      sendMyDetails = {printMyDetails}
     />

      {data.map((item , index) => (
        <div key={index}>
          <Expence
            date={item.date}
            title={item.title}
            price={item.price}
            id={item.id}
          ></Expence>
        </div>
      ))}


      {/* // <Expence date={data[0].date} title={data[0].title} price={data[0].price}>
     
      // </Expence>
     
      // <Expence date={data[1].date} title={data[1].title} price={data[1].price}>
      
      // </Expence>
     
      // <Expence date={data[2].date} title={data[2].title} price={data[2].price}>
      
      // </Expence>
      
      // <Expence date={data[3].date} title={data[3].title} price={data[3].price}>
      
      // </Expence>
      
      // <Expence date={data[4].date} title={data[4].title} price={data[4].price}>
      
      // </Expence> */}
    </div>
  );
}

export default App;


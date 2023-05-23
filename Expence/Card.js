
import './card.css';

const Card = (props) =>{
 const classes = 'card ' + props.className;

 return(<div className={classes}>
    {props.children} 
 </div> )}

export default Card;

//props.children is used to add the data in JSX. 
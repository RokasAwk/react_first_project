import { Component  } from "react";

import './card.styles.css';


class CardTemplate extends Component{
    
    render(){

        const { monster } = this.props;
        
        const { name, email, id } = monster;

        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&sized=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
       
            )
    }

}

export default CardTemplate;
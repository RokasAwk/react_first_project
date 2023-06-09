import { Component  } from "react";
import './card-list.style.css';
import CardTemplate from "../card-template/card-template.component";


// 自定義的component可自定義props類型名稱
class CardList extends Component {

    render() {
        
        const { monsters } = this.props;


        return (
        
            // 只能return一個parent level component

            // 可以這樣：
            //    <div>
            //         <div>CardList Component line1</div> 
            //         <div>CardList Component line2</div> 
            //    </div>

            // 不可以這樣：
            //    <div>
            //         <div>CardList Component line1</div>       
            //    </div>
            //    <div>
            //         <div>CardList Component line2</div>       
            //    </div>

            <div class='card-list'>
               
               {monsters.map((monster) => { 
               return ( 
                    <CardTemplate monster={monster}/>
                    )
                  
                    //  <h1 key={monster.id}>{monster.name}</h1>
                })}
            </div>
            
            )
    }

}

export default CardList;
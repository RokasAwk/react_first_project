import { Component  } from "react";


// 自定義的conponent可自定義props類型名稱
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

            <div>
                 <div>
                    {monsters.map((monster) => (
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))}
                 </div> 
            </div>
            
            )
    }

}

export default CardList;
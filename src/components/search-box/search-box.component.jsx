import { Component } from "react";
import './search-box.styles.css' // 任一地方引入就可以全域吃到這個css

class SearchBox extends Component {

    render() {

        return(

            <input
            className={`search-box ${this.props.className}`} // `是TAB上面的鍵 // JS用法
            type='search' 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}/>

        )
    }

}

export default SearchBox;
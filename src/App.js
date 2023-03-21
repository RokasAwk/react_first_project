import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

// 自定義component引入
import CardList from './components/card-list/card-list.component';

class App extends Component  {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // 非同步
      .then((response) => response.json()) // 轉json
      .then((users) => this.setState( 
        () => {
          return { monsters: users }; // init 賦值給List
        },
        () => {
          console.log(this.state);
        }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    // onChange setState
    this.setState(() => {
      return {
      searchField
      };
    });   

  }

  render(){

    const { monsters, searchField } = this.state; // 底下就不用再用this.state
    const { onSearchChange } = this;

    // 變成把搜尋後的結果印出來，每次都用原始list做搜尋，沒搜尋的時候也有原始list的值
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });


    return (

    // 自定義component引入用法 <自定義component/>
    <div className="App">
      <input className='search-box'
             type='search' 
             placeholder='搜尋怪物...' 
             onChange={onSearchChange}/>


      {/* {
        //畫面顯示
        filteredMonsters.map((monster) => {
          return (
          <div key={monster.id}><h1>{monster.name}</h1></div>
          )
        })
      }  */}
      
      <CardList monsters={filteredMonsters}/>
    </div>   

      
  );} 
 
}

export default App;

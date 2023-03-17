import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component  {

  constructor(){
    super();
    this.state = {
      monsters: []
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

  render(){

    return (
    <div className="App">
      <input className='search-box' type='search' placeholder='搜尋怪物...' onChange={(event) => {
      
      const searchString = event.target.value.toLocaleLowerCase();
      const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchString);
       });

      // onChange setState
      this.setState(() => {
        return {
          monsters: filteredMonsters
        };
      });   

     }}/>


      {
        //畫面顯示
        this.state.monsters.map((monster) => {
          return (
          <div key={monster.id}><h1>{monster.name}</h1></div>
          )

        })
      } 
    </div>
  );} 
 
}

export default App;

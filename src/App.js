// import { Component } from 'react';
import { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

// 自定義component引入
import CardList from './components/card-list/card-list.component';


// functional component

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue] value: 值; setValue:作用類似setState

  const onSearchChange =  (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();

        setSearchField(searchFieldString)
      }

  return(

     // 自定義component引入用法 <自定義component/>
     <div className="App">

     <h1 className='app-title'>Monsters Rolodex</h1>

     <SearchBox
       className='monsters-search-box'
       onChangeHandler ={onSearchChange} 
       placeholder ='Search monsters...'/> 
       
     {/* <CardList monsters={filteredMonsters}/> */}
   </div>   
    )

  }


// class component

// class App extends Component  {

//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users') // 非同步
//       .then((response) => response.json()) // 轉json
//       .then((users) => this.setState( 
//         () => {
//           return { monsters: users }; // init 賦值給List
//         },
//         () => {
//           console.log(this.state);
//         }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     // onChange setState
//     this.setState(() => {
//       return {
//       searchField
//       };
//     });   

//   }

//   render(){

//     const { monsters, searchField } = this.state; // 底下就不用再用this.state
//     const { onSearchChange } = this;

//     // 變成把搜尋後的結果印出來，每次都用原始list做搜尋，沒搜尋的時候也有原始list的值
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });


//     return (

//     // 自定義component引入用法 <自定義component/>
//     <div className="App">

//       <h1 className='app-title'>Monsters Rolodex</h1>
     
//       {/* {
//         //畫面顯示
//         filteredMonsters.map((monster) => {
//           return (
//           <div key={monster.id}><h1>{monster.name}</h1></div>
//           )
//         })
//       }  */}

//       <SearchBox
//         className='monsters-search-box'
//         onChangeHandler ={onSearchChange} 
//         placeholder ='Search monsters...'/> 
        
//       <CardList monsters={filteredMonsters}/>
//     </div>   

      
//   );} 
 
// }

export default App;

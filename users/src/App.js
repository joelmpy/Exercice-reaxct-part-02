import React from 'react';
import Users from './users.json';
import Info from './component/infox';


export class App extends React.Component{
  render(){
    
let name1 = Users.map(user =>{
return <Info name = {user.name} username = {user.username} email = {user.email}/>
})


    return(<div>{name1}</div>)
  }


}

export default App
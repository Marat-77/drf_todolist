import axios from 'axios';
import React from 'react';
import './App.css';
import UserList from './components/User';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';


class App extends React.Component {

  constructor(props) {
    super(props)
    // установка состояния:
    this.state = {
      'users': []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8088/api/users/').then(response => {
      const users = response.data;
      this.setState({
        'users':users
      });
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div className='my-main'>
          <Menu/>
          <div className='content'>
          <UserList users={this.state.users}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

// передаем/экспортируем - передается в index.js
export default App;

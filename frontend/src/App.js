import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
import UserList from './components/User';
import ProjectList from './components/Project';
import TodoList from './components/Todo';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import LoginForm from './components/Auth';


class App extends React.Component {

  constructor(props) {
    super(props)
    // установка состояния:
    this.state = {
      'users': [],
      'projects': [],
      'todos': [],
      'token': '',
      date: new Date().toLocaleString()
    };
  }

  get_token(username, password) {
    const data = {username:username, password: password}
    axios.get('http://127.0.0.1:8088/api-token/', data).then(response => {
      this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }

  set_token() {
    // localStorage.setItem('login', username)
    // let item = localStorage.getItem('login')
    console.log(token)
  }

  is_auth(){}

  logout(){}

  get_headers(){}

  get_token_from_storage(){}

  load_data() {
    axios.get('http://127.0.0.1:8088/api/users/').then(response => {
      const users = response.data;
      console.log(users);
      this.setState({
        'users':users
      });
      console.log(this.state);
      console.log(this.state.users);
    }).catch(error => console.log(error))
  

  
    axios.get('http://127.0.0.1:8088/api/projects/').then(response => {
      const projects = response.data;
      console.log(projects);
      this.setState({
        'projects':projects
      });
      console.log(this.state);
      console.log(this.state.projects);
      console.log(this.state.date);
    }).catch(error => console.log(error))
  

  
    axios.get('http://127.0.0.1:8088/api/todos/').then(response => {
      const todos = response.data;
      console.log(todos);
      this.setState({
        'todos':todos
      });
      console.log(this.state);
      console.log(this.state.todos);
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.load_data()
    // axios.get('http://127.0.0.1:8088/api/users/').then(response => {
    //   const users = response.data;
    //   console.log(users);
    //   this.setState({
    //     'users':users
    //   });
    //   console.log(this.state);
    //   console.log(this.state.users);
    // }).catch(error => console.log(error))
  

  
    // axios.get('http://127.0.0.1:8088/api/projects/').then(response => {
    //   const projects = response.data;
    //   console.log(projects);
    //   this.setState({
    //     'projects':projects
    //   });
    //   console.log(this.state);
    //   console.log(this.state.projects);
    //   console.log(this.state.date);
    // }).catch(error => console.log(error))
  

  
    // axios.get('http://127.0.0.1:8088/api/todos/').then(response => {
    //   const todos = response.data;
    //   console.log(todos);
    //   this.setState({
    //     'todos':todos
    //   });
    //   console.log(this.state);
    //   console.log(this.state.todos);
    // }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div className='my-main'>
          <Menu/>
          <div className='content'>
              <Routes>
                <Route exact path='/users' element={<UserList users={this.state.users}/>}/>
                <Route exact path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                <Route exact path='/todos' element={<TodoList todos={this.state.todos}/>}/>
                <Route exact path='/login' element={
                  <LoginForm get_token={(username, password)=> this.get_token(username, password)}/>
                }/>
                {/* <Route path='*' element={<NotFound404/>}/> */}
              </Routes>
          </div>
        </div>
        <Footer date={this.state.date}/>
        </BrowserRouter>
      </div>
    );
  }
}

// передаем/экспортируем - передается в index.js
export default App;

import axios from 'axios';
import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
import UserList from './components/User';
import ProjectList from './components/Project';
import TodoList from './components/Todo';
import Menu from './components/Menu.js';
// - надоело с ним бодаться
import Footer from './components/Footer.js';
import LoginForm from './components/Auth';
// import './components/Menu.css';


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
    const data = { username: username, password: password }
    axios.get('http://127.0.0.1:8088/api-token/', data).then(response => {
      this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }

  set_token() {
    // localStorage.setItem('login', username)
    // let item = localStorage.getItem('login')
    console.log(token)
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({ 'token': token }, () => this.load_data())
  }

  is_auth() {
    return !!this.state.token
  }

  logout() {
    this.set_token('')
    this.setState( {'users': []}, () => this.load_data() )
    this.setState( {'projects': []}, () => this.load_data() )
    this.setState( {'todos': []}, () => this.load_data() )
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_auth()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({ 'token': token }, () => this.load_data())
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8088/api/users/', { headers }).then(response => {
      const users = response.data;
      console.log(users);
      this.setState({
        'users': users
      });
      console.log(this.state);
      console.log(this.state.users);
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8088/api/projects/', { headers }).then(response => {
      const projects = response.data;
      console.log(projects);
      this.setState({
        'projects': projects
      });
      console.log(this.state);
      console.log(this.state.projects);
      console.log(this.state.date);
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8088/api/todos/', { headers }).then(response => {
      const todos = response.data;
      console.log(todos);
      this.setState({
        'todos': todos
      });
      console.log(this.state);
      console.log(this.state.todos);
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    // this.load_data()
    this.get_token_from_storage()

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
            <Menu />
            <div className='content'>
              <Routes>
                <Route exact path='/users' element={<UserList users={this.state.users} />} />
                <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                <Route exact path='/todos' element={<TodoList todos={this.state.todos} />} />
                <Route exact path='/login' element={
                  <LoginForm get_token={(username, password) => this.get_token(username, password)} />
                } />
              </Routes>
            </div>
          </div>
          <Footer date={this.state.date} />
        </BrowserRouter>
      </div>
    );
  }
}

// передаем/экспортируем - передается в index.js
export default App;


// render() {
//   return (
//     <div>
//       {/* <React.StrictMode> */}
//       <BrowserRouter>
//         <div className='my-main'>
//           {/* <nav className="container">
//             <ul className="ulmenu">
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//               <li>
//                 <Link to="/projects">Projects</Link>
//               </li>
//               <li>
//                 <Link to="/todos">Todos</Link>
//               </li>
//               <li>
//                 {this.is_auth() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
//               </li>
//             </ul>
//           </nav> */}
//           <Menu />
//           {/* фтопку это меню - пусть фронтендер делает */}
//           {/* <Menu menu_auth={this.is_auth()}/> */}
//           {/* <Menu (menu_auth={this.is_auth()}, menu_logout={this.logout()}) /> */}
//           {/* <Menu menu_auth={ this.is_auth() ? ()=>this.logout() : null }/> */}
//           {/* <Menu menu_auth={ this.is_auth() } menu_logout={ this.logout() }/> */}
//           <div className='content'>
//             <Routes>
//               <Route exact path='/users' element={<UserList users={this.state.users} />} />
//               <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
//               <Route exact path='/todos' element={<TodoList todos={this.state.todos} />} />
//               <Route exact path='/login' element={
//                 <LoginForm get_token={(username, password) => this.get_token(username, password)} />
//               } />
//               {/* <Route path='*' element={<NotFound404/>}/> */}
//             </Routes>
//           </div>
//         </div>
//         <Footer date={this.state.date} />
//       </BrowserRouter>
//       {/* </React.StrictMode> */}
//     </div>
//   );
// }

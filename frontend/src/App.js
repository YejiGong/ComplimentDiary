import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Auth from './hoc/auth';
import Main from './subpage/Main.js';
import Write from './subpage/Write.js';
import Record from './subpage/Record.js';
import Menu from './components/Menu.js';
import Setting from './subpage/Setting.js';
import Plaza from './subpage/Plaza.js';
import Login from './subpage/Login.js';

function App() {
  return(
    <div>
        <Routes>
          <Route exact path="/" element={<Main/>} component={Auth(Main, false, null)} />
          <Route exact path="/login" element={<Login/>} component={Auth(Login, true, null)} />
          <Route exact path="/menu" element={<Menu/>} component={Auth(Menu, null, null)} />
          <Route exact path="/write" element={<Write/>} component={Auth(Write, true, null)}/>
          <Route exact path="/record" element={<Record/>} component={Auth(Record,true, null)}/>
          <Route exact path="/setting" element={<Setting/>} component={Auth(Setting,true,null)}/>
          <Route exact path="/plaza" element={<Plaza/>} component={Auth(Plaza,true,null)}/>
        </Routes>
    </div>
  );
}

export default App;

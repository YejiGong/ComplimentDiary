import './App.css';

function App() {
  return (
    <div class="container">
      <div class="main">
      <div class="content">칭찬<br></br>일기</div>
        <div class="logo">
          <img src={require("./images/leaf.png")}/>
        </div>
      </div>
      <div class="login">
        <div class="input">
        <input type="id" id="login"></input><br></br>
        <input type="password" id="login"></input><br></br>
        </div>
        <div class="button">
          <input type="submit" id="button" value="LogIn"></input>
        </div>
      </div>
      
    </div>

  );
}

export default App;

import './Main.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "./../_actions/user_action";

function Main(props) {
  const [Id, setId] = useState("")
  const [Pw, setPw] = useState("")
  const dispatch = useDispatch()

  const onIdHandler = (e)=>{
    setId(e.currentTarget.value)
  }

  const onPwHandler = (e)=>{
    setPw(e.currentTarget.value)
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();

    let body={
      id: Id,
      pw: Pw
    }

    dispatch(loginUser(body))
    .then(response =>{
      if(response.payload.loginSuccess){
        props.history.push('/menu')
      } else{
        alert('Login Failed')
      }
    })
  }

  return (
    <div class="container">
      <div class="main">
      <div class="content">칭찬<br></br>일기</div>
        <div class="logo">
          <img src={require("./../images/leaf.png")}/>
        </div>
      </div>
      <div class="login">
          <div class="input">
          <input type="id" id="login" value={Id} onChange={onIdHandler}/><br></br>
          <input type="password" value={Pw} id="login" onChange={onPwHandler}/><br></br>
          </div>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
          <div class="button">
            <input type="submit" id="button" value="LogIn"/>
          </div>
        </form>
        <div class="join">
          <input type="button" id="join" value="join"/>
          <input type="button" id="find" value="pw"/>
        </div>
      </div>
      
    </div>
  );
}

export default Main;

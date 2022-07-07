import './Main.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth, loginUser} from "./../_actions/user_action";
import Join from "./Join.js";
import {useNavigate} from 'react-router-dom';

function Main(props) {
  //for join, find pw modal
  const navigate=useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>{
      setIsModalOpen(true);
  };

  const closeModal = () =>{
    setIsModalOpen(false);
  }

  //for login
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
      password: Pw
    }

    dispatch(loginUser(body))
    .then(response =>{
      if(response.payload.loginSuccess){
        navigate('/Write')
      } else{
        alert('Login Failed')
      }
    })
  }

  return (
    <div className="container">
      <div className="main">
      <div className="content">칭찬<br></br>일기</div>
        <div className="logo">
          <img src={require("./../images/leaf.png")}/>
        </div>
      </div>
      <div className="login">
          <div className="input">
          <input type="id" id="login" value={Id} onChange={onIdHandler}/><br></br>
          <input type="password" value={Pw} id="login" onChange={onPwHandler}/><br></br>
          </div>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
          <div className="button">
            <input type="submit" id="button" value="LogIn"/>
          </div>
        </form>
        <div className="join">
          <input type="button" id="join" value="join" onClick={openModal}/>
           {isModalOpen && (
            <div className="modalWrapper" onClick={closeModal}>
            <Join></Join>
            </div>
           )}
        </div>
      </div>
      
    </div>
  );
}

export default Main;

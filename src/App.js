import './App.css';
import React from 'react';
import styles from "./Login.module.css";
import homestyles from "./Home.module.css"

function Home(){
  return(
    <div className={homestyles.threehalf}>
      <div className={homestyles.yellowBackground}></div>
      <div className={homestyles.right}>
        <div className={homestyles.top}>
          <img src="img/post_it.png" height="200px" width="200px" />
          <h1 className={homestyles.h1}>Post - it</h1>
        </div>
        <div className={homestyles.center}>
        </div>
        <div className={homestyles.under}>
          <a href='makeNote.html'><input type="submit" className={homestyles.button} value="로그인"></input></a>
        </div>
        <div className={homestyles.under}>
          <a href='signUp.html'><input type="submit" className={homestyles.button} value="회원가입" ></input></a>
          <p><a href='소개.html'>개발자 소개</a></p>
        </div>

      </div>
      <div className={homestyles.yellowBackground}></div> 
    </div>
  )
}
function Login(){
  function handleClick(e){
    window.location.replace("/next")
  }

  return(
    <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.h1AfterLogin}>로그인</h1>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form>
          <p>
          <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.'></input>
          </p>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <p>
          <input type="text" className={styles.textbox} placeholder='비밀번호를 입력해주세요.'></input>
          </p>
          </form>
        </div>
        <div className={styles.under}>
          <a href='makeNote.html'><input type="submit" className={styles.button} value="로그인"></input></a>
        </div>
        <div className={styles.under}>
          <a href='signUp.html'><input type="submit" className={styles.button} value="회원가입" ></input></a>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}

function SignUp(){
  return(
      <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.h1AfterLogin}>회원가입</h1>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form>
          <p>
          <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.'></input>
          </p>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <p>
          <input type="text" className={styles.textbox} placeholder='비밀번호를 입력해주세요.'></input>
          </p>
          </form>
        </div>
        <div className={styles.under}>
          <a href='SignUpSuccess.html'><input type="submit" className={styles.button} value="회원가입"></input></a>
        </div>
        <div className={styles.under}>
          <a href='Login.html'><input type="submit" className={styles.button} value="로그인" ></input></a>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}


  
function App() {
  return (
    <SignUp></SignUp>
  );
}

export default App;

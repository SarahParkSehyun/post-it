import './App.css';
import React from 'react';
import styles from "./Login.module.css";

function Login(){
  return(
    <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.h1AfterLogin}>로그인</h1>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <input type="text" className='textbox' maxLength="12"></input>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <input type="text" className='textbox' maxLength="30"></input>
        </div>
        <div className={styles.under}>
          <a href='makeNote.html'><input type="submit" className='button' value="로그인"></input></a>
        </div>
        <div className={styles.under}>
          <a href='signup.html'><input type="submit" className='button' value="회원가입"></input></a>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}

function App() {
  return (
    <Login></Login>
  );
}

export default App;

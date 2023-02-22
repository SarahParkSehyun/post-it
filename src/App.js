import './App.css';
import React from 'react';
import styles from "./Home.module.css";

function Home(){
  return(
    <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.h1AfterLogin}>내 노트 만들기</h1>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>노트의 주인</h2>
          <input type="text" className='textbox' maxLength="12"></input>
          <h2 className={styles.noteintroduce}>노트 소개</h2>
          <input type="text" className='textbox' maxLength="30"></input>
        </div>
        <div className={styles.under}>
          <a href='make_success.html'><input type="submit" className='button' value="노트 만들기"></input></a>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}

function App() {
  return (
    <Home></Home>
  );
}

export default App;

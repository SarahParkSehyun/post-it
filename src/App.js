import './App.css';

function App() {
  return (
    <div className="threehalf">
      <div className="yellowBackground"></div>
      <div className='right'>
        <div className='top'>
          <h1 className='h1AfterLogin'>내 노트 만들기</h1>
        </div>
        <div className='center'>
          <h2 className='noteowner'>노트의 주인</h2>
          <input type="text" className='textbox' maxLength="12"></input>
          <h2 className='noteintroduce'>노트 소개</h2>
          <input type="text" className='textbox' maxLength="30"></input>
        </div>
        <div className='under'>
          <a href='make_success.html'><input type="submit" className='button' value="노트 만들기"></input></a>
        </div>
      </div>
      <div className='yellowBackground'></div>

      
    </div>
  );
}

export default App;

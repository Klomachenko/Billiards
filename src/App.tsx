import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MatchingListPage from './pages/MatchingListPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ChattingPage from './pages/ChattingPage.tsx';
import ChatRoomPage from './pages/ChatRoomPage.tsx';
import GameListPage from './pages/GameListPage.tsx';
import MyPage from './pages/MyPage.tsx';
import GamePage from './pages/GamePage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/matching' element={<MatchingListPage />} />
          <Route path='/chat' element={<ChattingPage />} />
          <Route path='/chatroom/:chatRoomId' element={<ChatRoomPage />} />
          <Route path='/game' element={<GameListPage />} />
          <Route path='/my' element={<MyPage />} />
          <Route path='/mockgame' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MatchingListPage from './pages/MatchingListPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ChattingPage from './pages/ChattingPage.tsx';
import ChatRoomPage from './pages/ChatRoomPage.tsx';
import GameListPage from './pages/GameListPage.tsx';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

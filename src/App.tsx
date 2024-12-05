import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MatchingListPage from './pages/MatchingListPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ChattingPage from './pages/ChattingPage.tsx';
import ChatRoomPage from './pages/ChatRoomPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route path='/matching' element={<MatchingListPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/chat' element={<ChattingPage />} />
          <Route path='/chatroom/:chatRoomId' element={<ChatRoomPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

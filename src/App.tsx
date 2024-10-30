import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage.tsx';
import MatchingListPage from './pages/MatchingListPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ChattingPage from './pages/ChattingPage.tsx';
import JoinQueueButton from './components/JoinQueueButton.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/matching' element={<MatchingListPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/chat' element={<ChattingPage />} />
        </Routes>
      </BrowserRouter>

      <JoinQueueButton />

      {/* <LoginPage /> */}
      {/* <MatchingListPage /> */}
    </>
  );
}

export default App;

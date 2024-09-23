import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./routes/Profile/Profile";
import ProfileDetail from "./routes/Profile/ProfileDetail";
import Chat from "./routes/Chat";
import Chatting from "./routes/Chatting/Chatting.jsx";
import Calendar from "./routes/Calender";
import Setting from "./routes/Setting/Setting";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />

          <Route path="/profile/detail/:id" element={<ProfileDetail />} />

          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<Chatting />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/setting" element={<Setting />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

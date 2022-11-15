import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import FindPw from "./pages/FindPw";
import RevisionPw from "./pages/RevisionPw";
import DDay from "./pages/DDay";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/revisionpw" element={<RevisionPw />} />
        <Route path="/dday" element={<DDay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

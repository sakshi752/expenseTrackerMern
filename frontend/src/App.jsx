import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TransactionPage from "./Pages/TransactionPage/TransactionPage";
import { ToastContainer } from "react-toastify";

function App() {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <>
      <Router>
        <Routes path="/" element={<Layout />}>
          <Route index element={token ? <Dashboard /> : <LoginPage />} />

          {token && <>
            <Route path="/transactions" element={<TransactionPage />} />
          </>}
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
      />
    </>
  )
}

export default App

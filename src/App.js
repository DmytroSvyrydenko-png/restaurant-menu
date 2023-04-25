import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import { Header } from './components/Header/Header'
import { MenuListPage } from './containers/MenuListPage/MenuListPage'
import { Footer } from './components/Footer/Footer'
import { LoginPage } from './containers/LoginPage/LoginPage'
import { useState } from "react"
import { ErrorPage } from "./containers/ErrorPage/ErrorPage"


export function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));


  return (
    <Router>
      <div className="App">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <main>
          <Routes>
            <Route
              exact path="/"
              element={
                isLoggedIn ? <Navigate to="/dishes" /> : <Navigate to="/login" />
              }
            />

            <Route
              exact
              path="/login"
              element={
                !isLoggedIn ?
                  <LoginPage
                    setIsLoggedIn={setIsLoggedIn}
                    setUserName={setUserName}
                  /> : <Navigate to="/dishes" />
              }
            />

            <Route
              exact
              path="/dishes"
              element={isLoggedIn ? <MenuListPage /> : <Navigate to="/login" />}
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Pages/Header/Header";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Widgets from "./Pages/widgets/Widgets";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {/* conditional rendering */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
      {/*  */}
    </div>
  );
}

export default App;

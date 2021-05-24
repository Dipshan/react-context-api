// Alias -> different name, aka -> also known as...
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Home from "./components/Home";
import ScrollRestoration from "./components/ScrollRestoration";
import UsersTable from "./components/UsersTable/UsersTable";
import { AuthProvider } from "./components/AuthProvider";
// import Header from "./components/Header";

function App() {
  return (
    // All the children inside of authprovider can acess the
    // values... provided by the <AuthProvider> component.
    <AuthProvider>
      <Router>
        <Header />
        <ScrollRestoration />

        {/* Define Routes... */}
        <Content>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/users">
              <UsersTable />
            </Route>
            {/* Nested Route */}
            <Route path="/posts/:id">
              <Post />
            </Route>
            <Route path="/posts">
              <Api />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
export default App;

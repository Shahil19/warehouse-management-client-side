import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, loginError] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { email, password };
    console.log(user);
    // Login user
    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser] = useAuthState(auth);
  //   let auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  if (currentUser) {
    //------------------------ JWT
    const email = currentUser.email;
    const url = "https://afternoon-harbor-69950.herokuapp.com/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('accessToken', data.token)
      });

    navigate(from, { replace: true });
  }


  return (
    <div>
      <div className="w-50 mx-auto">
        <h2 className="text-center">Please Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Text className="text-muted">
            {loginError && <p className="text-danger">{loginError.message}</p>}
          </Form.Text>
          <Form.Text>
            <Nav.Link className="text-black" as={Link} to="/register">
              <span>New to shared soft?</span>{" "}
              <span className="text-primary ">Register</span>{" "}
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/forgetPassword">
              <span></span>{" "}
              <span className="text-primary ">Forgot Password?</span>{" "}
            </Nav.Link>
          </Form.Text>
          <Form.Group className="d-grid gap-2">
            <Button className="my-2" variant="primary" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>

      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;

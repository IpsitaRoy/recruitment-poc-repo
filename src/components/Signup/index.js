import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signup.scss";

const Signup = () => {
  useEffect(() => {
    console.log(document.getElementById("status-recruiter"));
    let rec = document.getElementById("status-recruiter");
    let can = document.getElementById("status-candidate");
    let currStatus = localStorage.getItem("status");
    if (currStatus === "recruiter") {
      rec.checked = true;
    }
    else if (currStatus === "candidate") {
      can.checked = true;
    }
  }, []);
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [uaadhar, setUaadhar] = useState("");
  const [upan, setUpan] = useState("");
  const [udob, setUdob] = useState();
  const [upwd, setUpwd] = useState("");
  const nameHandler = (evt) => {
    setUname(evt.target.value);
  };
  const emailHandler = (evt) => {
    setUemail(evt.target.value);
  };
  const aadharHandler = (evt) => {
    setUaadhar(evt.target.value);
  };
  const panHandler = (evt) => {
    setUpan(evt.target.value);
  };
  // const dobHandler = (evt) => {
  //   console.log(evt.target.value);
  //   console.log(window.location.pathname);
  // };
  const pwdHandler = (evt) => {
    setUpwd(evt.target.value);
  };
  const handleSignup = (evt) => {
    evt.preventDefault();
    let recStatusCheck = document.getElementById("status-recruiter").checked;
    let canStatusCheck = document.getElementById("status-candidate").checked;
    let signupFormUserStatus;
    if (!recStatusCheck && !canStatusCheck) {
      console.log("ERR STATUS EMPTY");
    }
    if (recStatusCheck) {
      signupFormUserStatus = "recruiter";
    }
    if (canStatusCheck) {
      signupFormUserStatus = "candidate";
    }
    console.log(signupFormUserStatus);
    let signupFormUserData = {
      name: uname,
      email: uemail,
      aadhar: uaadhar,
      pan: upan,
      pwd: upwd,
      userstatus: signupFormUserStatus
    };
    if (signupFormUserStatus === "recruiter") {
      let recUserListCopy = JSON.parse(localStorage.getItem("recUserList"));
      if (recUserListCopy) {
        let temparr = recUserListCopy;
        temparr.push(signupFormUserData);
        let temparrStr = JSON.stringify(temparr);
        localStorage.setItem("recUserList", temparrStr);
      }
      else {
        let temparr = [];
        temparr.push(signupFormUserData);
        let temparrStr = JSON.stringify(temparr);
        localStorage.setItem("recUserList", temparrStr);
      }
    }
    else if (signupFormUserStatus === "candidate") {
      let canUserListCopy = JSON.parse(localStorage.getItem("canUserList"));
      if (canUserListCopy) {
        let temparr = canUserListCopy;
        temparr.push(signupFormUserData);
        let temparrStr = JSON.stringify(temparr);
        localStorage.setItem("canUserList", temparrStr);
      }
      else {
        let temparr = [];
        temparr.push(signupFormUserData);
        let temparrStr = JSON.stringify(temparr);
        localStorage.setItem("canUserList", temparrStr);
      }
    }
  };
  return (
    <div className="sign-up-form">
      <Form>
        <div className="status-checkbox">
          <Form.Check
            inline
            label="I'm a Recruiter"
            name="status"
            type="radio"
            id="status-recruiter"
            value="recruiter"
            onChange={() => localStorage.setItem("status", "recruiter")}
          />

          <Form.Check
            inline
            label="I'm looking for Job"
            name="status"
            type="radio"
            id="status-candidate"
            value="candidate"
            onChange={() => localStorage.setItem("status", "candidate")}
          />
        </div>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Type your name" onChange={nameHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdhaar">
          <Form.Label>Adhaar Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your Adhaar number" onChange={aadharHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPan">
          <Form.Label>PAN</Form.Label>
          <Form.Control type="text" placeholder="Enter your PAN" onChange={panHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={pwdHandler} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
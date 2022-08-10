import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const axios = require("axios").default;

const BACKEND_API = process.env.REACT_APP_API;

const AddNewUser = () => {
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [isPrimaryCarer, setIsPrimaryCarer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post(`${BACKEND_API}/users/register`, {
          first_name: firstName,
          last_name: lastName,
          username: username,
          password: password,
          isAdmin: isAdmin === "Yes" ? true : false,
          isPrimaryCarer: isPrimaryCarer === "Yes" ? true : false,
          relationship_to_patient: relationship,
        })
        .then((response) => console.log(response));
    } else {
      console.log("Passwords do not match");
    }

    navigate("/");
  };

  return (
    <>
      <h3>Add New User to child's records such as Nanny</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group
          className="mb-3 w-25 w-25"
          controlId="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter New First Name" />
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          controlId="last-name"
          onChange={(e) => setLastName(e.target.value)}
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter New Last Name" />
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          controlId="username"
          onChange={(e) => setUserName(e.target.value)}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter New Username" />
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          controlId="relationship"
          onChange={(e) => setRelationship(e.target.value)}
        >
          <Form.Label>Relationship to child</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User's Relationship to child"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          onChange={(e) => setIsAdmin(e.target.value)}
        >
          <Form.Label>User has Admin Rights to child's records</Form.Label>
          <Form.Select>
            <option>No</option>
            <option>Yes</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          onChange={(e) => setIsPrimaryCarer(e.target.value)}
        >
          <Form.Label>
            User Primary Carer such as legal Guardian/Parent
          </Form.Label>
          <Form.Select>
            <option>No</option>
            <option>Yes</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="mb-3 w-25"
          controlId="password"
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3 w-25"
          controlId="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddNewUser;

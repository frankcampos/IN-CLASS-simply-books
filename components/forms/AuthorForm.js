// TODO: import all libraries and components
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
// TODO: initialState
// TODO: Create function AuthorForm
function AuthorForm() {
  return (
    <Form onSubmit={null}>
      <h2 style={{ color: 'white' }}>Author</h2>
      {/* FIRST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="First Name" name="First Name" />
      </FloatingLabel>
      {/* LAST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Last Name" name="Last Name" />
      </FloatingLabel>
      {/* EMAIL INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control type="text" placeholder="email" name="email" />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <Button type="submit">Create Author</Button>
    </Form>
  );
}
// hooks useState and useEffect
// TODO: I have to use the event listener OnSubmit
// TODO: add the event listener OnChange
// TODO: create the component
export default AuthorForm;

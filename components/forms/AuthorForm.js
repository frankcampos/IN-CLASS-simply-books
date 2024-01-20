import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createAuthor, updateAuthor } from '../../api/authorData';
// TODO: initialState
const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  image: '',
};
// TODO: Create function AuthorForm
function AuthorForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [authors, setAuthors] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAuthor(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createAuthor(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateAuthor(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'}Author</h2>
      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Author Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* FIRST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="First Name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>
      {/* LAST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Last Name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel>
      {/* EMAIL INPUT  */}
      <FloatingLabel controlId="floatingInput4" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}
AuthorForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};
// hooks useState and useEffect
// TODO: I have to use the event listener OnSubmit
// TODO: add the event listener OnChange
// TODO: create the component
export default AuthorForm;

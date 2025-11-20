
import React from 'react';
import "./App.css";
import { signupValidation } from './SignupValidation';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
};

function App() {
  return (
    <div className="page">
      <div className="card">
        <h2>Create Account</h2>
        <p className="subtitle">Join us by filling the form below.</p>

        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form className="form">

              <div className="form-group">
                <label>Name</label>
                <Field type="text" name="name" />
                {errors.name && touched.name && <small>{errors.name}</small>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <Field type="email" name="email" />
                {errors.email && touched.email && <small>{errors.email}</small>}
              </div>

              <div className="form-group">
                <label>Password</label>
                <Field type="password" name="password" />
                {errors.password && touched.password && <small>{errors.password}</small>}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <Field type="password" name="cpassword" />
                {errors.cpassword && touched.cpassword && <small>{errors.cpassword}</small>}
              </div>

              <button type="submit">Create Account</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../../components/button';

const LoginForm = props => {
  const errors = {};
  const values = {};

  const { onSubmit } = props;

  function handleChange() {}

  function handleBlur() {}

  return (
    <div>
      <fieldset>
        <input
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          value={values.username}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange('password')}
          value={values.password}
        />
        <Button primary large onClick={onSubmit} type="submit">
          Login
        </Button>
      </fieldset>
    </div>
  );
};

export default LoginForm;

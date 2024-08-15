// client/src/pages/Login.js
import React, { useState } from 'react';
import api from '../services/api';
const Login = () => {
const [formData, setFormData] = useState({
email: '',
password: ''
});
const { email, password } = formData;
const onChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = async (e) => {
e.preventDefault();
try {
const res = await api.post('/auth/login', formData);
localStorage.setItem('token', res.data.token);
console.log('User logged in successfully');
} catch (err) {
console.error(err.response.data.msg);
}
};
return (
<div>
<h1>Login</h1>
<form onSubmit={onSubmit}>
<input
type="email"
placeholder="Email"
name="email"
value={email}
onChange={onChange}
/>
<input
type="password"
placeholder="Password"
name="password"
value={password}
onChange={onChange}
/>
<button type="submit">Login</button>
</form>
</div>
);
};
export default Login;
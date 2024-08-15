// client/src/pages/Register.js
import React, { useState } from 'react';
import api from '../services/api';
const Register = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
role: 'client'
});
const { name, email, password, role } = formData;
const onChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = async (e) => {
e.preventDefault();
try {
const res = await api.post('/auth/register', formData);
localStorage.setItem('token', res.data.token);
console.log('User registered successfully');
} catch (err) {
console.error(err.response.data.msg);
}
};
return (
<div>
<h1>Register</h1>
<form onSubmit={onSubmit}>
<input
type="text"
placeholder="Name"
name="name"
value={name}
onChange={onChange}
/>
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
<button type="submit">Register</button>
</form>
</div>
);
};
export default Register;
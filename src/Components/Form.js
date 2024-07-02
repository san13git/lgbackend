import React from 'react'
import {useState} from 'react'

const Form = ({setUserEmail}) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError('Mobile number must be 10 digits.');
    } else {
      setError('');
      const response = await fetch('http://localhost:5000/api/v1/users/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, mobile }),
      });

      if (response.ok) {
        alert('User registered successfully');
        setUserEmail(email);
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to register user');
      }
    }
  };
  return (
    <div>

<form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}


      
    </div>
  )
}

export default Form

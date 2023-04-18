import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then((response) => {
            if (response.status === 200) {
                history.push('/home');
            } else {
                setError(true)                   
            }
        })
    }

    return ( 
        <div id='login-container'>
            <div id='login-content'>
                <h1>Login</h1>
            {error ? <p>Unable to login.</p> : null}
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setUsername(event.target.value)} name="username" id="username" type="text" placeholder="Username" />
                <input onChange={(event) => setPassword(event.target.value)} name="password" id="password" type="password" placeholder="Password" />
                <button type="submit">Log in</button>
            </form> 
            
            <p>Don't have an account? <Link to="sign-up">Sign Up</Link></p>
            </div>
        </div>
        
     );
}
 
export default Login;
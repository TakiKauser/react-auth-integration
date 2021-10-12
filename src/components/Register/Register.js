import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form>
                <input type="email" name="email" id="email" placeholder="Email" /> <br />
                <input type="password" name="password" id="password" placeholder="Password" /> <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import axios from "axios";

const SignUp =()=> {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <form>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>PhoneNumber :</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="button"
                onClick={async (e) => {
                    e.preventDefault();
                    try {
                        const response = await axios.post("http://localhost:8080/client/signUp", {formData: formData});
                        alert('Signed Up Successfully');
                    } catch (error) {
                        console.log(error);
                        alert('Sign Up Failed');
                    }
                }}
            >Sign Up</button>
        </form>
    );
}

export default SignUp;

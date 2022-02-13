import React, { useState, useContext } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import App from "../App";
import Cookies from 'js-cookie';



export const LoginForm = () => {


    const [error, setError] = useState('');

    let history = useHistory();

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required(),
            password: Yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            setError(null);
            resetForm({ values: '' });
            console.log(values);
            const response = await Axios
                .post("https://www.mecallapi.com/api/login", values)
                .catch((err) => {
                    if (err && err.response) setError(err.response.data.message);
                });
            if (response) {
                alert("Welcome back " + response.data.user.fname);
                Cookies.set('user', 'name')
                history.push('/')
            }
            else {
                alert("Invalid username or password");
            }
        },

    })



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br />
                <input
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="username"
                    name="username"
                    type="text"
                />
                {touched.username && errors.username ? (
                    <div>{errors.username}</div>
                ) : null}
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    type="password"
                />
                {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                ) : null}
                <br />
                <button type="submit" >Log in</button>
            </form>

        </div>
    );

};
export default LoginForm

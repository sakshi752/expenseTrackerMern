import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const [registerPage, setRegisterPage] = useState(false);
    const [initialState, setInitialState] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [validationSchema, setValidationSchema] = useState(Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    }));

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {

    }

    return (
        <div>

        </div>
    )
}

export default LoginPage

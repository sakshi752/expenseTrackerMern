import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUserService, registerUserService } from './LoginService';
import Button from '../../Components/Button';


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

        const requestBody = registerPage ? {
            email: values.email,
            password: values.password,
            name: values.name
        } : {
            email: values.email,
            password: values.password,
        }

        registerPage ? registerUserService(requestBody, dispatch) : loginUserService(requestBody, dispatch);
        resetForm();
    }

    return (
        <div>

            <h1 className='text-3xl my-10 font-bold tracking-wider'>
                {registerPage ? "Register" : "Login"}
            </h1>

            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSubmit}
            >
                <Form className='w-[40%]'>
                    {registerPage && <div className='flex flex-col mb-8'>
                        <label>Name:</label>
                        <Field name="name" className="border p-1" />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>}

                    <div className='flex flex-col mb-8'>
                        <label>Email:</label>
                        <Field name="email" className="border p-1" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label>Password:</label>
                        <Field name="password" className="border p-1" />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div className='w-[100%] mb-8'>
                        <Button text={registerPage ? "Register" : "Login"} style={{
                            backgroundColor: "white",
                            color: "black",
                            padding: "10px",
                            width: "100%",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            display: "flex",
                            textAlign: "center"
                        }} type={"submit"} />
                    </div>
                </Form>
            </Formik>

            <button type='button' className='cursor-pointer' onClick={() => {
                setRegisterPage(!registerPage)
                setInitialState({
                    name: "",
                    email: "",
                    password: ""
                })
            }}>
                <p>
                    {registerPage ? "Already have an account?" : "Don't have an account?"}
                    <span className="text-red-500 cursor-pointer pl-2">
                        {registerPage ? "Login now" : "Register now"}
                    </span>

                </p>
            </button>
        </div>
    )
}

export default LoginPage

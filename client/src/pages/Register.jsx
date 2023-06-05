import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
    const { register } = useAuthCall();

    const registerScheme = object({
        username: string().min(3).max(20).required(),
        email: string().email().required(),
        password: string().required().min(8).max(20),
    });

    return (
        <div className="container mx-auto py-8 mt-20">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <Formik
                validationSchema={registerScheme}
                initialValues={{ username: "", email: "", password: "" }}
                className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
                onSubmit={(values, actions) => {
                    register(values);
                    actions.resetForm();
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Userame
                        </label>
                        <Field
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="John Doe"
                        />
                        <ErrorMessage name="username">
                            {(msg) => (
                                <div className="text-sm text-center text-red-700">
                                    {msg}
                                </div>
                            )}
                        </ErrorMessage>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <Field
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                        />
                        <ErrorMessage name="email">
                            {(msg) => (
                                <div className="text-sm text-center text-red-700">
                                    {msg}
                                </div>
                            )}
                        </ErrorMessage>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Field
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                        />
                        <ErrorMessage name="password">
                            {(msg) => (
                                <div className="text-sm text-center text-red-700">
                                    {msg}
                                </div>
                            )}
                        </ErrorMessage>
                    </div>
                    <button
                        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Register;

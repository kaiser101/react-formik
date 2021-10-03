import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
});

const SignupForm = () => {
    const { handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" {...getFieldProps("firstName")} />
            {touched.firstName && errors.firstName ? (
                <div>{errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" {...getFieldProps("lastName")} />
            {touched.lastName && errors.lastName ? (
                <div>{errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...getFieldProps("email")} />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm;

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log( values );
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'Must be 2 characters or more')
                                .max(15, 'Must be 15 characters or less')
                                .required('This field is required'),
                        email: Yup.string()
                                .email('Invalid email address')
                                .required('This field is required'),
                        password1: Yup.string()
                                    .min(6, 'Password is too short - should be 6 chars minimum')
                                    .required('This field is required'),
                        password2: Yup.string()
                                    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                                    .required('This field is required')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Jose"
                            />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="correo@correo.com"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="*********"
                            />

                            <MyTextInput
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="*********"
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset Form</button>
                            
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
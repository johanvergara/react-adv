import { Formik, Form } from 'formik';
import  * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={( values ) => {
                    console.log( values )
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('Required'),
                        lastName: Yup.string()
                                        .max(10, 'Must be 10 characters or less')
                                        .required('Required'),
                        email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                        // terms: Yup.boolean().isTrue('Must accept T&C'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Must accept T&C'),
                        jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'This option is not allowed')
                                    .required('Required')
                    })
                }
            >
                { (formik) => (
                        <Form>
                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="Pedro"
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Marin"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email" 
                                placeholder="correo@google.com"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer">Deleveloper</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms and conditions" name="terms" />
            
                            <button type='submit'>Create</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
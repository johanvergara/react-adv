import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { 
        formData, onChange, resetForm, isValidEmail,
        name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit } >
                <input 
                    name="name"
                    onChange={ onChange }
                    placeholder="Name"
                    type="text"
                    value={ name }
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    name="email"
                    onChange={ onChange }
                    placeholder="Email"
                    type="email"
                    value={ email }
                    className={ `${ !isValidEmail(email) && 'has-error' }` }
                    />
                { !isValidEmail(email) && <span>Email no es valido</span> }

                <input 
                    name="password1"
                    onChange={ onChange }
                    placeholder="Password"
                    type="password"
                    value={ password1 }
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contrasena tiene que tener 6 caracteres</span> }


                <input 
                    name="password2"
                    onChange={ onChange }
                    placeholder="Repeat Password"
                    type="password"
                    value={ password2 }
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contrasenas deben de ser iguales</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset Form</button>
                
            </form>
        </div>
    )
}
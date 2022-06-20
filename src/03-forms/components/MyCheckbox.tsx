import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    // Comodin para anadir x cantidad de parametros
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const  [ field ] = useField({ ...props, type: 'checkbox'});

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
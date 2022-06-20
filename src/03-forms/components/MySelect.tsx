import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    // Comodin para anadir x cantidad de parametros
    [x: string]: any;
}

export const MySelect = ( { label, ...props }: Props) => {

    const  [ field ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
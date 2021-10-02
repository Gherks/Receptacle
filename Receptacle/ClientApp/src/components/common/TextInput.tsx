import React from 'react';
import TextInputForm from './TextInputForm';

export default function TextInput(props: { inputForm: TextInputForm, error: string}) {
    let wrapperClass = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <div className="field">
                <input
                    id={props.inputForm.id}
                    name={props.inputForm.name}
                    className="form-control"
                    type="text"
                    value={props.inputForm.value}
                    onChange={props.inputForm.onChange}
                    placeholder={props.inputForm.placeholder}
                    aria-label={props.inputForm.name} />
            </div>
            {props.error && <div className="text-danger"><small>{props.error}</small></div>}
        </div>
    );
}


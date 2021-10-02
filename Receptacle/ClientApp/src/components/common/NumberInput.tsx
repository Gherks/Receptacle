import React from 'react';
import NumberInputForm from './NumberInputForm';

export default function NumberInput(props: { inputForm: NumberInputForm, error: string }) {
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
                    type="number"
                    value={props.inputForm.value || ""}
                    onChange={props.inputForm.onChange}
                    placeholder={props.inputForm.placeholder}
                    aria-label={props.inputForm.name} />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );
}


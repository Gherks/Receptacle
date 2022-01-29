import React, { ChangeEventHandler } from 'react';

interface SelectOption {
    value: string,
    label: string
}

interface SelectInputForm {
    id: string,
    name: string,
    value: string,
    onSelectChange: ChangeEventHandler<HTMLSelectElement>,
    options: SelectOption[]
}

export default function SelectInput(props: { inputForm: SelectInputForm, error: string }) {
    let wrapperClass = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <select
                id={props.inputForm.id}
                name={props.inputForm.name}
                value={props.inputForm.value}
                className="form-select"
                onChange={props.inputForm.onSelectChange}>
                {props.inputForm.options.map(option => {
                    return (
                        <option value={option.value}>{option.label}</option>
                    )
                })}
            </select>
            {props.error && <div className="text-danger"><small>{props.error}</small></div>}
        </div>
    );
}


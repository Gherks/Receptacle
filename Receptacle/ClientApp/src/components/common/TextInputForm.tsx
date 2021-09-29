import { ChangeEventHandler } from 'react';

export default interface TextInputForm {
    id: string,
    name: string,
    placeholder: string
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
}

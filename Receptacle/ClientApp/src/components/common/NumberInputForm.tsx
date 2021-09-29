import { ChangeEventHandler } from 'react';

export default interface NumberInputForm {
    id: string,
    name: string,
    placeholder: string
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: number,
}

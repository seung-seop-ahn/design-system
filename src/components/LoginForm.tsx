import { DefaultTextField } from "./DefaultTextField.tsx";
import { Label } from "./Label.tsx";
import { useState } from "react";
import {PrimaryButton} from "./PrimaryButton.tsx";

interface ILoginForm {
}

export const LoginForm = ({}: ILoginForm) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Label
                htmlFor={'email'}
            >
                Email
            </Label>
            <DefaultTextField
                id={'email'}
                errorMessage={'check email'}
                iconPath={'/vite.svg'}
                iconAlt={'delete'}
                onIconClick={() => setEmail('')}
                placeholder={'email'}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                isError={false}
            />
            <DefaultTextField
                id={'password'}
                errorMessage={'check password'}
                iconPath={'/vite.svg'}
                iconAlt={'delete'}
                onIconClick={() => setPassword('')}
                placeholder={'password'}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                isError={false}
            />
            <PrimaryButton
                onClick={() => {}}
                theme={'dark'}
                isDisabled={email === '' || password === ''}
            >
                Login
            </PrimaryButton>
        </div>
    )
}
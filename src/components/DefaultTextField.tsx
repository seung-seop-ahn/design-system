import {IconButton} from "./IconButton.tsx";
import {ErrorMessage} from "./ErrorMessage.tsx";
import {useState} from "react";

interface IDefaultTextFieldProps {
    errorMessage: string;
    iconAlt: string;
    iconPath: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    id: string;
    value: string;
    isError: boolean
}

export const DefaultTextField = ({
    errorMessage,
    iconAlt,
    iconPath,
    onIconClick,
    placeholder,
    onChange,
    id,
    value,
    isError
}: IDefaultTextFieldProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const borderColor = isFocused
        ? 'border-secondary'
        : !value
            ? 'border-mono300'
            : 'border-primary';

    return (
        <div className={'relative text-field'}>
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                    flex
                    items-center
                    justify-between
                    text-primary 
                    border-b 
                    ${borderColor}
                `}>
                <input
                    data-testid={id}
                    id={id}
                    className={'outline-none'}
                    type={"text"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {!!value &&
                    <IconButton
                        alt={iconAlt}
                        iconPath={iconPath}
                        onClick={onIconClick}
                    />
                }
            </div>
            {isError &&
                // <div className={'absolute'}>
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                // </div>
            }
        </div>
    )
}
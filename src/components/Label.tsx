interface ILabelProps {
    htmlFor: string;
    children: string
}

export const Label = ({ htmlFor, children }: ILabelProps) => {
    return <label className={"text-sm text-primary"} htmlFor={htmlFor}>{children}</label>
}
interface ITagButtonProps {
    children: string
    isChecked: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const TagButton = ({ children, isChecked, onClick }: ITagButtonProps) => {
    const buttonStyle = isChecked
        ? 'text-primary bg-white'
        : 'text-white bg-dark-opacity'
    return (
        <button
            className={`
                rounded-tag-button
                px-[10px]
                border-white
                h-[33px]
                text-sm
                font-medium
                ${buttonStyle}        
           `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
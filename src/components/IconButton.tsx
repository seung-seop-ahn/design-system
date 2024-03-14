interface IIconButtonProps {
    alt: string;
    iconPath: string // svg
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconButton = ({ alt, iconPath, onClick }: IIconButtonProps) => {
    return (
        <button onClick={onClick}>
            <img alt={alt} src={iconPath} />
        </button>
    )
}
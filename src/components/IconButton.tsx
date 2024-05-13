export interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
  iconPath,
  onClick,
  alt,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img className="w-6 h-6" alt={alt} src={iconPath} />
    </button>
  );
}

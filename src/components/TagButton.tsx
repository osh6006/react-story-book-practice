export interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-dark-opacity";
  return (
    <button
      className={`
            h-[33px] rounded-tag-button px-[10px] border border-white 
            text-sm
            font-medium
            ${buttonStyle}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

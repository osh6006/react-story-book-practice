import { flexColCenter } from "../style/common";

export interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconAlt,
  iconPath,
  text,
  onClick,
}: ICategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-button-default
        border
        border-primary
        text-primary
        text-base
        font-bold
        pl-[22px]
        pr-[21px]
        py-4
        ${flexColCenter}
    `}
    >
      <img src={iconPath} alt={iconAlt} className="w-[50px]" />
      <p>{text}</p>
    </button>
  );
}

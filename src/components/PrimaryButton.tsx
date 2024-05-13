type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

export interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  isDisabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-parimary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disableStyle = "disabled:bg-mono100 disabled:text-mono200";

//Record : 테마를 Key로 가지고 string을 Value로 가진다
const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  isDisabled,
  children,
  onClick,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`
          w-full h-[59px] rounded-primary-button
          ${disableStyle}
          ${color[theme]}
        `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

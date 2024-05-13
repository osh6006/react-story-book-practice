import IconButton from "./IconButton";

export interface INavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle?: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  title = "",
  showTitle,
  showBackButton,
  showCloseButton,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-[7px]">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back-arrow-button"
            iconPath="https://res.cloudinary.com/dxesudkxn/image/upload/v1715601588/jdoevjrpu9xej9u3mibb.svg"
            onClick={onBackButtonClick}
          />
        )}

        {/* 페이지 이름 */}
        {showTitle && <h1 className="text-2xl">{title}</h1>}
      </div>

      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close-button"
          iconPath="https://res.cloudinary.com/dxesudkxn/image/upload/v1715605034/coo171f6vvov0yqatuum.svg"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}

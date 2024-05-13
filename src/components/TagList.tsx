import { useState } from "react";
import TagButton from "./TagButton";

// 제네릭 타입 활용
// 태그리스트가 제네릭이긴 한데 무조건 string 으로
export interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  onTagClick,
  tagList,
}: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
  return (
    <div
      className="flex gap-x-4"
      onClick={(event) => {
        // 이벤트 버블링
        const eventTarget = event?.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}

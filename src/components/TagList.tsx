import {TagButton} from "./TagButton.tsx";
import {useState} from "react";

interface ITagListProps<T extends string> {
    tagList: T[]
    onTagClick: (tag: T) => void
}

export const TagList = <T extends string>({
  tagList,
  onTagClick
}: ITagListProps<T>) => {
    const [selectedTag, setSelectedTag] = useState<T>(tagList[0])

    return(
        <div
            className={'flex gap-x-4'}
            // Event bubbling
            onClick={(event) => {
                const eventTarget = event.target as HTMLButtonElement;
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
    )
}
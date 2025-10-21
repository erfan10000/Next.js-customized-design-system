
"use client";
import { InitButton } from "../atoms/Button";
import { InitInput } from "../atoms/Input";
import { CiSearch } from "react-icons/ci";
import styles from './styles/searchInput.module.scss';
import clsx from "clsx";
import { useState } from "react";

type SearchInputProps = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    onSearch?: () => void;
}

export function SearchInput ({
    onChange,
    value,
}: SearchInputProps) {
    
    const [isHidden] = useState(true);

    const searchBtnClicked = () => {
        // setIsHidden (prev => !prev);
    };

    return (
        <div className={`${styles.searchInput} flex`}>
            <InitInput
                className={clsx("rounded-r-none placeholder-gray-500 text-gray-600 placeholder-text-sm! border-0 focus:border-r-0 dark:bg-background ", {[styles["input-hidden"]]: isHidden} )}
                onChange={onChange}
                placeholder="Search..."
                type="text"
                value={value}
                size="full"
            />
            <InitButton
                className={clsx("rounded-l-none dark:text-white", {"rounded-md!": isHidden})}
                onClick={searchBtnClicked}
                type="outline"
                size="medium"
            >
               <CiSearch />
            </InitButton>
        </div>
    );
}
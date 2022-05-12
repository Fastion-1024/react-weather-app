import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './LocationSearch.css';

interface IProps {
    onSubmit: (input: string) => void;
    onReset?: () => void;
}

const SearchBar: React.FC<IProps> = ({ onSubmit, onReset }) => {
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        !input && onReset?.();
    }, [input]);

    return (
        <form
            className="search-bar"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(input);
            }}
        >
            <input
                type="text"
                placeholder="Search for a City"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
                <MdSearch />
            </button>
        </form>
    );
};

export default SearchBar;

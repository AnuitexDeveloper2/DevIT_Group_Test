import React from 'react';
import { SearchFindInput } from './SearchSection.styles';
import { SearchSectionProps } from './SearchSection.types';

const SearchSection: React.FC<SearchSectionProps> = ({ search }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        search(event.target.value);
    };

    return <SearchFindInput onChange={handleSearch} placeholder="Search by article title" />;
};

export default SearchSection;

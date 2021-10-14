import React from 'react';
import './styles.css';

type SearchProps = {
  searchValue: string;
  changeSearchValue: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchValue, changeSearchValue }) => {
  return (
    <input
      className="Search-root"
      onChange={(e) => changeSearchValue(e.target.value)}
      value={searchValue}
      placeholder="Search by name"
    />
  );
};

Search.displayName = 'Search';
export default Search;

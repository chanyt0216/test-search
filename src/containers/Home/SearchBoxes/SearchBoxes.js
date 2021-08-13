import React, { useState } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { useHistory } from 'react-router-dom';

export default function SearchBoxes() {
  const [searchValues, setSearchValues] = useState({ keyword: '', topics: '' });
  let history = useHistory();

  function onSearchClick() {
    if (
      searchValues?.keyword?.trim() !== '' &&
      searchValues?.topics?.trim() !== ''
    ) {
      history.push(`/search/${searchValues.keyword}/${searchValues.topics}`);
    } else if (searchValues?.keyword !== '') {
      history.push(`/search/${searchValues.keyword}/${searchValues.topics}`);
    }
  }

  function onInputChange(e) {
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <SearchBox
        className="mb-4"
        iconImage="/images/icon/search.svg"
        onClick={onSearchClick}
        inputSettings={{
          placeholder: 'Search SCMP',
          value: searchValues.keyword,
          name: 'keyword',
          onChange: (e) => {
            onInputChange(e);
          },
          onKeyPress: (e) => {
            if (e.key === 'Enter') {
              onSearchClick();
            }
          },
        }}
      />
      <SearchBox
        inputSettings={{
          placeholder: 'Topics',
          value: searchValues.topics,
          name: 'topics',
          onChange: (e) => {
            onInputChange(e);
          },
          onKeyPress: (e) => {
            if (e.key === 'Enter') {
              onSearchClick();
            }
          },
        }}
      />
    </div>
  );
}

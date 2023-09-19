import PropTypes from 'prop-types';
import { Form, Input, SearchButton } from './SearchBar.styled';

export const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        className="input"
        name="searchQuerry"
        value={value}
        onChange={onChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <span>Search</span>
      </SearchButton>
    </Form>
  );
};

SearchBar.PropType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

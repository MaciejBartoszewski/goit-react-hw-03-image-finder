import { Component } from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  render() {
    const { submit, inputValue } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={submit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={inputValue}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  submit: PropTypes.func,
  inputValue: PropTypes.func,
};
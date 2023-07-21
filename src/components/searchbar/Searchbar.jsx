import { Component } from 'react';
import styles from '../styles/styles.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  render() {
    const { submit, inputValue } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.form} onSubmit={submit}>
          <button type="submit" className={styles.button}>
            <span className={styles.btnLabel}>Search</span>
          </button>
          <input
            onChange={inputValue}
            className={styles.input}
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
  submit: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
};
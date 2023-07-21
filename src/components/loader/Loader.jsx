import { Component } from 'react';
import { Watch } from 'react-loader-spinner';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export class Loader extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.loader}>
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#3f51b6"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={isLoading}
        />
      </div>
    );
  }
}
Loader.propTypes = {
  isLoading: PropTypes.bool,
};
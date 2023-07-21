import { Component } from 'react';
import styles from '../styles/styles.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { state, modalOpen } = this.props;
    return (
      <>
        {state.arrayOfImages.map(image => (
          <li onClick={modalOpen} key={image.id} className={styles.item}>
            <img
              className={styles.image}
              src={image.webformatURL}
              alt={image.tags}
            />
          </li>
        ))}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  state: PropTypes.object.isRequired,
  modalOpen: PropTypes.func.isRequired,
};
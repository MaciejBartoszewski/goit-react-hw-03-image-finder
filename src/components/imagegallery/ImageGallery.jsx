import { Component } from 'react';
import styles from '../styles/styles.module.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={styles.ImageGallery}>{children}</ul>;
  }
}
import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { ImageGalleryItem } from './imagegalleryitem/ImageGalleryItem';
import { Button } from './button/Button';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import { fetchData } from './Api';

export class App extends Component {
  state = {
    arrayOfImages: [],
    page: 1,
    quantityElements: 12,
    isLoading: false,
    inputValuee: '',
    open: false,
    imageSrcToModal: '',
    tagsImageToModal: '',
  };
  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.setState({ open: false });
      }
    });
  }
  settingInputValue = e => {
    this.setState({ inputValuee: e.target.value });
    this.setState(prevState => {
      return { inputValuee: prevState.inputValuee };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target[1].value;
    let page = this.state.page;
    let quantityElements = this.state.quantityElements;
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
    fetchData(inputValue, page, quantityElements).then(resp => {
      if (inputValue === '') {
        return null;
      }
      this.setState({ arrayOfImages: [...resp.data.hits] });
    });
  };
  handlePagination = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
    let inputValue = this.state.inputValuee;
    let page = this.state.page;
    let quantityElements = this.state.quantityElements;
    this.setState({ quantityElements: quantityElements + 12 });
    this.setState(prevState => {
      quantityElements = prevState.quantityElements;
      fetchData(inputValue, page, quantityElements).then(resp => {
        this.setState({ arrayOfImages: [...resp.data.hits] });
      });
    });
  };
  modalOpen = e => {
    this.setState({
      imageSrcToModal: e.target.src,
      tagsImageToModal: e.target.alt,
      open: true,
    });
  };
  modalClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar
          submit={this.handleSubmit}
          inputValue={this.settingInputValue}
        />
        <ImageGallery>
          <ImageGalleryItem state={this.state} modalOpen={this.modalOpen} />
        </ImageGallery>
        {this.state.arrayOfImages.length === 0 ? null : (
          <Button pagination={this.handlePagination} />
        )}
        <Loader isLoading={this.state.isLoading} />
        {!this.state.open ? null : (
          <Modal state={this.state} modalClose={this.modalClose} />
        )}
      </div>
    );
  }
}
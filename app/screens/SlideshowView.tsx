import React, { Component } from 'react';

export const SlideshowView = ({ navigation, style }: any) => {
  slideInterval = 5000;
  slideShowInterval = null;

  constructor(props) {
    super(props);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToGivenSlide = this.goToGivenSlide.bind(this);

    this.state = {
      menu_y: 0,
      index: 0,
      autoplay: true,
      translateValue: 0,
      paused: false,
    }
  }

  setInterval(interval) {
    this.slideShowInterval = window.setInterval(() => {
      if (!this.state.paused) {
        this.goToNextSlide();
      }
    }, interval);
  }

  componentDidMount() {
    if (this.state.autoplay) {
      this.setInterval(this.slideInterval);
    }
  }

  goToNextSlide() {
    this.setState({ index: this.state.index + 1 >= this.props.images.length ? 0 : this.state.index + 1 });
  }

  goToPreviousSlide() {
    this.setState(
      {
        index: this.state.index - 1 < 0 ? this.props.images.length - 1 : this.state.index - 1
      }
    );
  }

  const goToGivenSlide = (position: number) => {
    if (position >= 0 && position < this.props.images.length) {
      window.clearInterval(this.slideShowInterval);
      this.setState(
        {
          index: position,
          paused: true,
        }
      );
    } else {
      console.error('Invalid slide position!');
    }
  }

  return (
    <div id='slideshow-container'>

      {/* Slideshow image */}
      <div
        id='slideshow'
        style={{
          background: 'url(' + this.props.images[this.state.index || 0].name + ')',
          transform: this.props.images[this.state.index || 0].transform ? this.props.images[this.state.index || 0].transform : '',
        }}
      >

        {/* Slideshow previous/pause/play/next buttons */}
        <div
          id='slideshow-left-button'
          className='slideshow-left-right-button'
          onClick={() => {
            window.clearInterval(this.slideShowInterval);
            this.setState({ paused: true });
            this.goToPreviousSlide();
          }}
        />

        <div
          id='slideshow-play-pause-button'
          style={{
            right: '46.5vw',
            background: !this.state.paused ? 'url(/css/images/slideshow-pause-button.svg)' : 'url(/css/images/slideshow-play-button.svg)',
          }}
          onClick={() => {
            if (this.state.paused) {
              this.setInterval(this.slideInterval);
              this.setState({
                ...this.state,
                paused: false,
              });
            } else {
              window.clearInterval(this.slideShowInterval);
              this.setState({
                ...this.state,
                paused: true,
              });
            }
          }}
        />

        <div
          id='slideshow-right-button'
          className='slideshow-left-right-button'
          onClick={() => {
            window.clearInterval(this.slideShowInterval);
            this.setState({ paused: true });
            this.goToNextSlide();
          }}
        />

        {/* Slideshow nav */}
        <div
          id='slideshow-nav-container'
        >
          <div style={{ display: 'flex' }}>
            {
              this.props.images.map((img_path, index) =>
              (
                <div
                  key={`slideshow-image-${index}`}
                  id='slideshow-nav-button'
                  style={{
                    backgroundColor: index === this.state.index ? '#ff7200' : '#fff'
                  }}
                  onClick={() => this.goToGivenSlide(index)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideshowView;
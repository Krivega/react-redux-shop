import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import ImageComponent from 'components/Image';

import './style.css';

const block = 'progressive-image';

export default class ProgressiveImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    responsive: PropTypes.bool,
    fit: PropTypes.bool,
    small: PropTypes.bool,
    circle: PropTypes.bool
  };

  constructor(props: ProgressiveImageProps) {
    super(props);

    this.state = {
      currentSrc: props.placeholder,
      loading: true
    };
  }

  componentDidMount() {
    const { src } = this.props;

    this.loadImage(src);
  }

  componentWillReceiveProps(nextProps) {
    const { src, placeholder } = nextProps;

    if (src !== this.props.src) {
      this.setState({ currentSrc: placeholder, loading: true }, () => {
        this.loadImage(src);
      });
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
  }

  loadImage = src => {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }

    this.image = new Image();
    this.image.onload = this.onLoad;
    this.image.src = src;
  };

  onLoad = () => {
    this.setState({
      currentSrc: this.image.src,
      loading: false
    });
  };

  getBemMods() {
    return {
      loading: !!this.state.loading,
      fit: !!this.props.fit
    };
  }

  render() {
    const { currentSrc } = this.state;
    const { responsive, alt, fit, circle, small } = this.props;

    return (
      <div className={bem({ block, mods: this.getBemMods() })}>
        <ImageComponent
          src={currentSrc}
          alt={alt}
          responsive={responsive}
          fit={fit}
          circle={circle}
          small={small}
        />
      </div>
    );
  }
}

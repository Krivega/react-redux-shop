import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import features from 'features';
import Swipeable from 'react-swipeable';
import SlidableHelper from 'components/SlidableHelper';

import './style.css';

const block = 'slidable-list';
const ANIMATED_TIME = 1000;

export default class SlidableList extends React.Component {
  static defaultProps = {};

  static propTypes = {
    size: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      sliding: false,
      activeSlideIndex: 0,
      slideDate: new Date()
    };
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp, false);
  }

  setSliding(sliding) {
    this.setState({
      sliding,
      slideDate: new Date()
    });
  }

  updateSlides(next) {
    this.setSliding(false);

    return next ? this.nextSlide() : this.previousSlide();
  }

  requestUpdateSlides(next) {
    if (this.hasSliding()) {
      window.requestAnimationFrame(this.updateSlides.bind(this, next));
      this.setSliding(true);
    }
  }

  hasSliding() {
    return !this.state.sliding && new Date() - this.state.slideDate > ANIMATED_TIME;
  }

  nextSlide() {
    const { activeSlideIndex } = this.state;
    const { size } = this.props;

    const hasNext = activeSlideIndex < size - 1;
    if (hasNext) {
      this.setSlide(activeSlideIndex + 1);
    }
  }

  previousSlide() {
    const { activeSlideIndex } = this.state;
    const hasPrev = activeSlideIndex !== 0;

    if (hasPrev) {
      this.setSlide(activeSlideIndex - 1);
    }
  }

  setSlide(activeSlideIndex) {
    this.setState({ activeSlideIndex });
  }

  handleWheel = event => {
    const delta = Math.max(-1, Math.min(1, -event.deltaY));

    event.preventDefault();
    event.stopPropagation();

    this.requestUpdateSlides(delta < 0);
  };

  handleSwipeUp = () => {
    this.requestUpdateSlides(true);
  };

  handleSwipeDown = () => {
    this.requestUpdateSlides(false);
  };

  renderItem = (Child, index) => {
    const { activeSlideIndex } = this.state;

    const mods = {
      old: index < activeSlideIndex,
      wait: index > activeSlideIndex
    };

    return (
      <div className={bem({ block, elem: 'item', mods })} key={Child.key}>
        <div className={bem({ block, elem: 'item__content' })}>{React.cloneElement(Child)}</div>
      </div>
    );
  };

  handleKeyUp = event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      event.stopPropagation();

      if (event.key === 'ArrowUp') {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    }
  };

  hasSlidableHelper() {
    const { activeSlideIndex } = this.state;
    const hasActive = activeSlideIndex === 0 && !this.issShowingSlidableHelper;

    if (hasActive) {
      this.issShowingSlidableHelper = true;
    }

    return !hasActive;
  }

  handleClickItemNav = index => {
    this.setSlide(index);
  };

  renderNavItem(index) {
    const { activeSlideIndex } = this.state;
    const mods = { active: index === activeSlideIndex };

    return (
      <div
        key={index}
        className={bem({ block, elem: 'nav__item', mods })}
        onClick={this.handleClickItemNav.bind(this, index)}
      />
    );
  }

  renderNav() {
    if (features.isMobile()) {
      return null;
    }

    let { size: index } = this.props;
    const items = [];

    while (index--) {
      items.push(this.renderNavItem(index));
    }

    return <div className={bem({ block, elem: 'nav' })}>{items}</div>;
  }

  renderComponent() {
    const { children } = this.props;

    return (
      <div className={bem({ block })} onWheel={this.handleWheel}>
        {React.Children.map(children, this.renderItem)}
        <SlidableHelper hidden={this.hasSlidableHelper()} />
        {this.renderNav()}
      </div>
    );
  }

  render() {
    if (features.isTouchDevice()) {
      return (
        <Swipeable
          preventDefaultTouchmoveEvent={true}
          onSwipingUp={this.handleSwipeUp}
          onSwipingDown={this.handleSwipeDown}
        >
          {this.renderComponent()}
        </Swipeable>
      );
    }

    return this.renderComponent();
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import features from 'features';
import Swipeable from 'react-swipeable';
import SlidableHelper from 'components/SlidableHelper';

import './style.css';

const block = 'slidable-list';

export default class SlidableList extends React.PureComponent {
  static defaultProps = {};

  static propTypes = {
    size: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      sliding: false,
      activeSlideIndex: 0
    };
    this._sliding = false;
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp, false);

    if (this.blockSlidingTimeout) {
      clearTimeout(this.blockSlidingTimeout);
    }
  }

  setSliding(sliding) {
    this._sliding = sliding;
  }

  updateSlides(next) {
    return next ? this.nextSlide() : this.previousSlide();
  }

  requestUpdateSlides(next) {
    const hasSliding = this.hasSliding();

    if (hasSliding) {
      window.requestAnimationFrame(this.updateSlides.bind(this, next));
    }
  }

  hasSliding() {
    return !this._sliding;
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
    this.setSliding(true);
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

  handleClickItemNav = index => {
    this.setSlide(index);
  };

  handleTransitionEnd = event => {
    if (
      event.propertyName === 'transform' &&
      event.currentTarget === event.target &&
      this.hasActiveTarget(event.target)
    ) {
      this.blockSlidingTimeout = setTimeout(() => {
        this.setSliding(false);
      }, 500);
    }
  };

  hasActiveTarget(target) {
    return +target.dataset.index === this.state.activeSlideIndex;
  }

  hasSlidableHelper() {
    const { activeSlideIndex } = this.state;
    const hasActive = activeSlideIndex === 0 && !this.issShowingSlidableHelper;

    if (hasActive) {
      this.issShowingSlidableHelper = true;
    }

    return !hasActive;
  }

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

  renderItem = (Child, index) => {
    const { activeSlideIndex } = this.state;

    const mods = {
      old: index < activeSlideIndex,
      wait: index > activeSlideIndex
    };

    return (
      <div
        className={bem({ block, elem: 'item', mods })}
        key={Child.key}
        onTransitionEnd={this.handleTransitionEnd}
        data-index={index}
      >
        <div className={bem({ block, elem: 'item__content' })}>{React.cloneElement(Child)}</div>
      </div>
    );
  };

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

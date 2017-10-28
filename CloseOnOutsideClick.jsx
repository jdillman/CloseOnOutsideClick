import React from 'react';

export default class ClickedOutsideOrEsc extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.keyDown);
  }

  keyDown = (e) => {
    switch (e.key) {
    case 'Escape':
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      break;
    default:
    }
  }

  handleClickOutside = (event) => {
    if (this.ref && !this.ref.contains(event.target)) {
      if (this.props.onClick) {
        this.props.onClick(event);
      } else {
        // console.log('clicked outside but no onClick handler');
      }
    }
  }

  render() {
    return (
      <div ref={(node) => { this.ref = node; }}>
        {this.props.children}
      </div>
    );
  }
}

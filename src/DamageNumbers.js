import React, { Component } from "react";

class DamageNumbers extends Component {
  state = {
    animationFinished: true,
  };

  onAnimationStart = () => {
    this.setState({
      animationFinished: false,
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
    });
  };

  render() {
    const { animationFinished } = this.state;
    let displayState = animationFinished ? "hidden" : "visible";
    const { speed, iterations } = this.props;

    return (
      <div>
        <h1
          style={{
            visibility: displayState,
            animation: `damageAnimation ${speed}s ${iterations}`,
          }}
          className={`damage-text ${this.state.classNames}`}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}
        >
          -${this.props.payment}
        </h1>
      </div>
    );
  }
}

export default DamageNumbers;

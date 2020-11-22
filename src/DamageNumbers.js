import React, { Component } from "react";

class DamageNumbers extends Component {
  state = {
    classNames: "",
    animationFinished: true,
  };

  showDamage = () => {
    const { classNames } = this.state;
    this.setState({ classNames: classNames ? "" : "animation" });
    console.log(this.props.iterations);
  };

  onAnimationStart = () => {
    this.setState({
      animationFinished: false,
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      classNames: "",
    });
  };

  render() {
    const { animationFinished } = this.state;
    let displayState = animationFinished ? "hidden" : "visible";

    return (
      <div>
        <h1
          style={{
            visibility: displayState,
            animation: `damageAnimation ${this.props.speed}s ${this.props.iterations}`,
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

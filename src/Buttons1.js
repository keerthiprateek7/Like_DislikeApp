import React,{Component} from 'react'
import classNames from "classnames";

class Buttons1 extends Component {
    
    state = {
      like: 100,
      dislike: 25,
      isLikeActive: false,
      isDisLikeActive: false
    };
  
    
    liking() {
      this.setState({
        isLikeActive: !this.state.isLikeActive,
        like: this.state.isLikeActive ? this.state.like - 1 : this.state.like + 1
      });
    }

    disliking() {
        this.setState({
          isDisLikeActive: !this.state.isDisLikeActive,
          dislike: this.state.isDisLikeActive
            ? this.state.dislike - 1
            : this.state.dislike + 1
        });
      }
  
    handleLike() {
      if (this.state.isDisLikeActive) {
        this.liking();
        this.disliking();
      }
      this.liking();
    }
  
    handleDislike() {
      if (this.state.isLikeActive) {
        this.disliking();
        this.liking();
      }
      this.disliking();
    }
  
    render() {
      return (
        <>
          <button onClick={() => this.handleLike()} className={'like-button'}>
            <span className={classNames({ ["liked"]: this.state.isLikeActive })}>Like | {this.state.like}</span>
          </button>
          <button onClick={() => this.handleDislike()} className={'dislike-button'}>
            <span className={classNames({ ["disliked"]: this.state.isDisLikeActive })}>Dislike | {this.state.dislike}</span>
          </button>
        </>
      );
    }
  }

  export default Buttons1
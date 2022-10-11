'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'

    //   jsx
    // <button onClick={() => this.setState({ liked: true })}>
    //       Like
    //    </button>
    
    // ABOVE JSX CODE WAS THROWING ME SOME ERRORS 

    );
  }
}
const domContainer = document.querySelector('#like_button_container');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton))
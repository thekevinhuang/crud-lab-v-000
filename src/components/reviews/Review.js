import React, { Component } from 'react';

class Review extends Component {
  reviewDelete = (event) => {
<<<<<<< HEAD
    debugger
=======
>>>>>>> fd70a087820a338bd88a22c4e399e324a08419c2
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
          <button onClick={this.reviewDelete}> X </button>
        </li>
<<<<<<< HEAD

=======
        <button onClick={this.reviewDelete}> X </button>
>>>>>>> fd70a087820a338bd88a22c4e399e324a08419c2
      </div>
    );
  }

};

export default Review;

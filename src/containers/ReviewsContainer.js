import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId = {this.props.restaurant.id}/>
<<<<<<< HEAD
        <Reviews reviews={this.props.reviews.filter(review=>review.restaurantId ===this.props.restaurant.id)} deleteReview={this.props.deleteReview}/>
=======
        <Reviews reviews={this.props.reviews} deleteReview = {this.props.deleteReview}/>
>>>>>>> fd70a087820a338bd88a22c4e399e324a08419c2
      </div>
    )
  }
}

function mapStateToProps (state,ownProps) {
<<<<<<< HEAD

  return {
    reviews: state.reviews
=======
  return {
    reviews: state.reviews.filter(review => review.restaurantId = ownProps.restaurant.id)
>>>>>>> fd70a087820a338bd88a22c4e399e324a08419c2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch({type:"ADD_REVIEW", review: {text: text, restaurantId: restaurantId}}),
<<<<<<< HEAD
    deleteReview : (id) => dispatch({type: "DELETE_REVIEW", id: id})
=======
    deleteReview : (id) => dispatch({type: "DELETE_REVIEW"}, id: id)
>>>>>>> fd70a087820a338bd88a22c4e399e324a08419c2
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

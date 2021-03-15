import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({ rating, onChange, onSubmit }) => {
  return (
    <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
       <input
                className="review-input-rating"
                placeholder="Rating (1-5)"
                value={rating}
                name="rating"
                required
                onChange={(e) => onChange(e)}
      />
      <button type='submit' className="review-submit-button">Submit</button>
    </form>
  )
}

export default ReviewForm
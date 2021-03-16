import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({rating, onChange, onSubmit}) => {

 
  return (
    <form className="review-create-form" onSubmit={onSubmit}>
      <select className="rating-sort" onChange={(e) => onChange(e)}>
        <option value="" disabled selected hidden>
          Your Rating
        </option>
        <option className="option" name="rating" value={1}>&nbsp; ★ &nbsp;
        </option>
        <option className="option" name="rating" value={2}>&nbsp; ★★ &nbsp;
        </option>
        <option className="option" name="rating" value={3}>&nbsp; ★★★ &nbsp;
        </option>
        <option className="option" name="rating" value={4}>&nbsp; ★★★★ &nbsp;
        </option>
        <option className="option" name="rating" value={5}>&nbsp; ★★★★★ &nbsp;
        </option>
        </select>

      <button type="submit" className="rating-submit">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm
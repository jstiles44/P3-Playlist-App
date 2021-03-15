import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({rating, onChange, onSubmit}) => {


  return (
    <form className="review-create-form" onSubmit={onSubmit}>
     
              <select className="sort" onChange={(e) => onChange(e)}>
                <option className="option" name="rating" value={1}>&nbsp; ⭐ &nbsp;</option>
                <option className="option" name="rating" value={2}>&nbsp; ⭐️⭐️ &nbsp;</option>
                <option className="option" name="rating" value={3}>&nbsp; ⭐️⭐️⭐️ &nbsp;</option>
               <option className="option" name="rating" value={4}>&nbsp; ⭐️⭐️⭐️⭐️ &nbsp;</option>
              <option className="option" name="rating" value={5}>&nbsp; ⭐️⭐️⭐️⭐️⭐️ &nbsp;</option>
            </select>
   
      <button type='submit' className="review-submit-button">Submit</button>
    </form>
  )
}

export default ReviewForm
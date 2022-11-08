import React from 'react'

function UserComment({ review }) {
    // console.log(review);
    const { content, date, rating, reviewer, time } = review
    return (
        <div className="user-review">
            <div className="review-identity">
                <div className="reviewer-name">{reviewer}</div>
                <div className="user-rating">
                    {[...Array(rating)].map((r, index) => <i key={index} className="fa-solid fa-star"></i>)}

                </div>
                <div className="review-time">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
            </div>

            <p className="review-content">
                {content}
            </p>
        </div>
    )
}

export default UserComment
import React, { PropTypes } from 'react'

const ShowCount = ({ count, onAddClick }) => (
    <div>
        <span>{count}</span>
        <button onClick={() => onAddClick(count)}>Add</button>
    </div>
)

ShowCount.propTypes = {
  count: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired
}

export default ShowCount
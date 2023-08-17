import React from 'react'

function DesignElement({ design, handleOptionChange }) {

    const handleLocalOptionChange = (e) => {
        handleOptionChange(e)
    }

  return (
    <>
        <option 
            value={design.type}
            onClick={handleLocalOptionChange}
        >
            {design.type}
        </option>
    </>
  )
}

export default DesignElement
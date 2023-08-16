import React from 'react'

function ChongosElement({ handleInputPriceChange }) {

    const handleLocalInputPriceChange = (e) => {
        handleInputPriceChange(e)
    }

  return (
    <>
        <textarea 
            className="form-control mb-2"
            name="chongo"
            type="text"
            placeholder="descripción"
        />
        <input 
            className="form-control mb-2"
            type="number" 
            name="price" 
            placeholder="$"
            onChange={handleLocalInputPriceChange}
        />
        
    </>
  )
}

export default ChongosElement
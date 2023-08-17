
function DesignTypes({ design, handleDesignChange }) {

    const handleLocalDesignChange = (e) => {
        handleDesignChange(e)
    };

  return (
    <>
        <option 
            value={design.type} 
            onClick={handleLocalDesignChange}
        >
            {design.type}
        </option>
    </>
  )
}

export default DesignTypes
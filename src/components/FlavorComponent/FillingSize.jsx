
function FillingSize({ sizeFilling, handleSizeChange }) {

    const handleLocalSizeChange = (e) => {
        handleSizeChange(e);
    };

  return (
    <option 
        value={sizeFilling.size}
        onClick={handleLocalSizeChange}
    >
        {sizeFilling.size}
    </option>
  )
}

export default FillingSize
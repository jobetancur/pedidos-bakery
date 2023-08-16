
function CakesTypes({ cake, handleTypeChange }) {

    const handleLocalTypeChange = (e) => {
        handleTypeChange(e); // Llama a la función del padre para actualizar el sabor
    };

  return (
    <>
        <option 
            value={cake.type} 
            onClick={handleLocalTypeChange}
        >
            {cake.type}
        </option>
    </>
  )
}

export default CakesTypes
import { useState } from "react"

function FlavorElement({ flavorsList, flavor, handleFlavorSelectChange }) {

    const [localFlavor, setLocalFlavor] = useState(flavor);

    const handleLocalFlavorSelectChange = (e) => {
        setLocalFlavor(e.target.value);
        handleFlavorSelectChange(e);
    }

  return (
    <>
        <select
            className="form-select mb-2"
            name="flavor"
            value={localFlavor}
            onChange={handleLocalFlavorSelectChange}
        >
            <option disabled value="0">--Sabor--</option>
            {
                flavorsList?.map((flavorItem) => (
                    <option 
                        value={flavorItem.flavor}
                        key={flavorItem.id}
                    >
                        {flavorItem.flavor}
                    </option>
                ))
            }
            
        </select>
    </>
  )
}

export default FlavorElement
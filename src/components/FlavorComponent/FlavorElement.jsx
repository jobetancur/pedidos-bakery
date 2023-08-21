import { useEffect, useState } from "react"

function FlavorElement({ flavorsList, flavor, handleFlavorSelectChange, setSelectedFlavors }) {

    const [localFlavor, setLocalFlavor] = useState(flavor);

    useEffect(() => {
        if (flavor === "0") {
          setLocalFlavor("0");
        } else {
          setLocalFlavor(flavor);
        }
      }, [flavor]);

    const handleLocalFlavorSelectChange = (e) => {
        setLocalFlavor(e.target.value);
        handleFlavorSelectChange(e);
    }

  return (
    <>
        <select
            className="form-select mb-2 w-full p-2 border rounded-2xl border-black border-solid text-black outline-0"
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
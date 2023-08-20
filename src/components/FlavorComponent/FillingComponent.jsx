import { useEffect, useState } from "react"
import FillingElement from "./FillingElement";

function FillingComponent({ changeSizePrice, changeBasicFillingPrice }) {

    const [addFilling, setAddFilling] = useState([1]);
    const [selectedFillings, setSelectedFillings] = useState([]);
    const [fillingPrices, setFillingPrices] = useState({});
    const [ basicFillingPrice, setBasicFillingPrice ] = useState();

    const addNewFilling = () => {
        setAddFilling([ ...addFilling, addFilling.length + 1 ]);
        setSelectedFillings([...selectedFillings, '0']);
    }

    const deleteFilling = () => {
        if (addFilling.length > 1) {
            const newAddFlavor = addFilling.slice(0, addFilling.length - 1);
            setAddFilling(newAddFlavor);

            const newSelectedFillings = selectedFillings.slice(0, selectedFillings.length - 1);
            setSelectedFillings(newSelectedFillings);
    
            const lastKey = Object.keys(fillingPrices).pop(); 
            const { [lastKey]: removed, ...remainingPrices } = fillingPrices;
            setFillingPrices(remainingPrices);
        }
    }

    const changeFillingPrice = (fillingIndex, price) => {
        setFillingPrices(prevPrices => ({ ...prevPrices, [fillingIndex]: price }));
    };

    useEffect(() => {
        const sumatoria = Object.values(fillingPrices).reduce((primero, segundo) => primero + segundo, 0);
        changeSizePrice(sumatoria, basicFillingPrice)
        changeBasicFillingPrice(basicFillingPrice)
    }, [fillingPrices, basicFillingPrice])

    // console.log(basicFillingPrice)

  return (
    <>
        <h3 className="mb-3 mt-2 text-2xl">Relleno</h3>

        {
            addFilling.map((addFillingIndex) => (
                <FillingElement
                    key={addFillingIndex}
                    filling={addFillingIndex}
                    changeFillingPrice={changeFillingPrice}
                    setFillingPrices={setFillingPrices}
                    selectedFillings={selectedFillings}
                    setSelectedFillings={setSelectedFillings}
                    setBasicFillingPrice={setBasicFillingPrice}
                />
            ))
        }

        <button 
            className="bg-[#ED614A] py-2 px-4 rounded-3xl text-white"
            onClick={addNewFilling}
        >
            Agregar sabor
        </button>
        <button 
            className="m-3 bg-[#c2c0c0] py-2 px-4 rounded-3xl text-white"
            onClick={deleteFilling}
        >
            Quitar sabor
        </button>

        <br />
    </>
  )
}

export default FillingComponent
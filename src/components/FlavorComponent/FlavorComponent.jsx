import { useEffect, useState } from "react"
import FlavorElement from "../FlavorComponent/FlavorElement";

function FlavorComponent({ changeFlavorPrice, size, setSize, selectedFlavors, setSelectedFlavors, addFlavor, setAddFlavor }) {

    const flavorsList = [
        {id: 1, flavor: 'vainilla', price: 0.00},
        {id: 2, flavor: 'mocha', price: 0.00},
        {id: 3, flavor: 'mil hojas', price: 0.00},
        {id: 4, flavor: 'chocolate', price: 0.00},
        {id: 5, flavor: 'rompope por 1/4', price: 20.00},
        {id: 6, flavor: 'red velvet por 1/4', price: 15.00},
        {id: 7, flavor: 'pan capacillo por 1/4', price: 10.00},
    ]
    
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleFlavorSelectChange = (e, index) => {
        const selectedFlavor = e.target.value;
        const updatedSelectedFlavors = [...selectedFlavors]; 
        updatedSelectedFlavors[index] = selectedFlavor; 
        setSelectedFlavors(updatedSelectedFlavors);
    }

    const addNewFlavor = () => {
        setAddFlavor([ ...addFlavor, addFlavor.length + 1 ]);
    }

    const deleteFlavor = () =>  {
        if (addFlavor.length > 1) {
            const newAddFlavor = addFlavor.slice(0, addFlavor.length - 1);
            setAddFlavor(newAddFlavor);
            
            const newSelectedFlavors = selectedFlavors.slice(0, selectedFlavors.length - 1);
            setSelectedFlavors(newSelectedFlavors);
        }
    }

    useEffect(() => {
        const flavorCount = {};
    
        selectedFlavors.forEach((selectedFlavor) => {
            if (!flavorCount[selectedFlavor]) {
                flavorCount[selectedFlavor] = 0;
            }
            flavorCount[selectedFlavor]++;
        });
    
        let totalPrice = 0;
    
        selectedFlavors.forEach((selectedFlavor, index) => {
            const flavorItem = flavorsList.find(item => item.flavor === selectedFlavor);
    
            if (flavorItem) {
                let flavorPrice = flavorItem.price;
    
                const groupFlavors = ["vainilla", "mocha", "mil hojas", "chocolate"];
                const groupTotalCount = groupFlavors
                    .reduce((total, flavor) => total + (flavorCount[flavor] || 0), 0);
    
                if (groupFlavors.includes(selectedFlavor) && groupTotalCount >= 3 && index >= 2) {
                    flavorPrice += 5;
                }
    
                totalPrice += flavorPrice;
            }
        });
    
        changeFlavorPrice(totalPrice);
        
    }, [selectedFlavors]);

  return (
    <>
        <hr className="mb-3 mt-5"/>
        <h3 className="mb-3 my-2 text-2xl">Sabor del pan</h3>
        
        <select 
            name="size" 
            className="form-select mb-2 w-full py-2 px-3 border rounded-2xl border-black border-solid text-black outline-0"
            value={size}
            onChange={handleSizeChange}
        >
            <option disabled value="0">--Tamaño--</option>
            <option value="1/4 de plancha">1/4 de plancha</option>
            <option value="1/2 de plancha">1/2 de plancha</option>
            <option value="3/4 de plancha">3/4 de plancha</option>
            <option value="1 plancha">1 plancha</option>
        </select>
        {
            addFlavor.map((addFlavorIndex) => (
                <FlavorElement
                    key={addFlavorIndex}
                    flavorsList={flavorsList}
                    handleFlavorSelectChange={(e) => handleFlavorSelectChange(e, addFlavorIndex - 1)}
                    flavor={selectedFlavors[addFlavorIndex - 1] || '0'}
                    setSelectedFlavors={setSelectedFlavors}
                />
            ))
        }
        <button 
            type="button"
            className="bg-[#ED614A] py-2 px-4 rounded-3xl text-white"
            onClick={addNewFlavor}
        >
            Agregar sabor
        </button>
        <button
            type="button" 
            className="m-3 bg-[#c2c0c0] py-2 px-4 rounded-3xl text-white"
            onClick={deleteFlavor}
        >
            Quitar sabor
        </button>

    </>
  )
}

export default FlavorComponent
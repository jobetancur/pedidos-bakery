import { useEffect, useState } from "react";
import FillingSize from "./FillingSize";


function FillingElement({ 
    filling, 
    changeFillingPrice, 
    setFillingPrices, 
    selectedFillings, 
    setSelectedFillings, 
    setBasicFillingPrice 
}) {
    
    const fresa = [
            {id: 1, size: '1/4 de plancha', price: 10.00},
            {id: 2, size: '1/2 de plancha', price: 20.00},
            {id: 3, size: '3/4 de plancha', price: 30.00},
            {id: 4, size: '1 plancha', price: 40.00},
            {id: 5, size: '#8 redondo', price: 10.00},
            {id: 6, size: '#6 redondo', price: 10.00},
        ];
    const flan = [
            {id: 1, size: '1/4 de plancha', price: 30.00},
            {id: 2, size: '1/2 de plancha', price: 50.00},
            {id: 3, size: '3/4 de plancha', price: 70.00},
            {id: 4, size: '1 plancha', price: 90.00},
            {id: 5, size: '#8 redondo', price: 15.00},
        ]
    const chocoflan = [
            {id: 1, size: '1/4 de plancha', price: 30.00},
            {id: 2, size: '1/2 de plancha', price: 50.00},
            {id: 3, size: '3/4 de plancha', price: 70.00},
            {id: 4, size: '1 plancha', price: 90.00},
            {id: 5, size: '#8 redondo', price: 15.00},
        ]
    const rompope = [
            {id: 1, size: '1/4 de plancha', price: 20.00},
            {id: 2, size: '1/2 de plancha', price: 30.00},
            {id: 3, size: '3/4 de plancha', price: 40.00},
            {id: 4, size: '1 plancha', price: 50.00},
            {id: 5, size: '#8 redondo', price: 10.00},
            {id: 6, size: '#6 redondo', price: 10.00},
        ]
    

    const [ selectedFilling, setSelectedFilling ] = useState('0');
    const [ sizeFilling, setSizeFilling ] = useState();
    const [ viewFillingSize, setViewFillingSize ] = useState(false);
    const [ size, setSize ] = useState('0');

    const fillingChange = (e) => {
        setSelectedFilling(e.target.value);
        const newSelectedFillings = [...selectedFillings];
        newSelectedFillings[filling - 1] = e.target.value;
        setSelectedFillings(newSelectedFillings);
        setFillingPrices({});
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    useEffect(() => {
       
        if(selectedFilling === 'fresa'){
            setSizeFilling(fresa);
            setViewFillingSize(true)
        } else if(selectedFilling === 'flan'){
            setSizeFilling(flan);
            setViewFillingSize(true)
        } else if(selectedFilling === 'chocoflan'){
            setSizeFilling(chocoflan);
            setViewFillingSize(true)
        } else if(selectedFilling === 'rompope'){
            setSizeFilling(rompope);
            setViewFillingSize(true)
        } else {
            setViewFillingSize(false)
        }

    }, [ selectedFilling ]);

    useEffect(() => {
        
        // Análisis de tamaños de rellenos
        const sizePrice = sizeFilling && sizeFilling.find((value) => value.size === size);
        if (sizePrice) {
            changeFillingPrice(filling, sizePrice.price);
        }
    }, [sizeFilling, size, filling]);

    useEffect(() => {
        const specialFillingCount = selectedFillings.filter(filling => ['durazno', 'nuez', 'mermelada de fresa'].includes(filling)).length;

        let additionalPrice = 0;
        if (specialFillingCount >= 3) {
            additionalPrice = (specialFillingCount - 2) * 5;
        }

        setBasicFillingPrice(additionalPrice)

    }, [sizeFilling, size, filling, selectedFillings, changeFillingPrice]);

    

  return (
        <>
            <select 
                name={filling.toString()}
                className="form-select mb-3"
                value={selectedFilling}
                onChange={fillingChange}
            >
                <option disabled value="0">--Relleno--</option>
                <option value="durazno">durazno</option>
                <option value="nuez">nuez</option>
                <option value="mermelada de fresa">mermelada de fresa</option>
                <option value="fresa">fresa</option>
                <option value="flan">flan</option>
                <option value="chocoflan">chocoflan</option>
                <option value="rompope">rompope</option>
            </select>
            {
                viewFillingSize && (
                    <>
                        <h4>Tamaños disponibles</h4>
                        <select
                            className="form-select mb-4"
                            name="sizeFilling"
                            value={size}
                            onChange={handleSizeChange}
                        >
                            <option disabled value="0">
                                --Tamaño de relleno--
                            </option>
                            {sizeFilling.map((item) => (
                                <FillingSize
                                    key={item.id}
                                    sizeFilling={item}
                                    handleSizeChange={handleSizeChange}
                                />
                            ))}
                        </select>
                    </>
                )
            }
        </>
  )
}

export default FillingElement
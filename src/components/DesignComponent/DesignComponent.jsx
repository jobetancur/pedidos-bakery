import React, { useEffect, useState } from 'react'
import DesignElement from './DesignElement';
import ChongosElement from './ChongosElement';

function DesignComponent({ changeDesignPrice }) {

    const decopac = [
        {id: 1, type: '1/2 - 3/4 - 1', price: 30.00},
        {id: 2, type: 'de marco', price: 20.00},
        {id: 3, type: 'número de hojas', price: 0.00},
    ];

    const clientDesign = [
        {id: 1, type: 'número de hojas', price: 0.00},
    ]

    const images = [
        {id: 1, type: '#8', price: 15.00},
        {id: 2, type: '1/4', price: 30.00},
        {id: 3, type: '1/4', price: 30.00},
        {id: 4, type: '1/2', price: 45.00},
        {id: 5, type: '1 plancha', price: 65.00},
    ]

    const flowers = [
        {id: 1, type: '1 artificial', price: 12.00},
        {id: 2, type: '12 naturales', price: 60.00},
        {id: 3, type: '3 o 6 naturales', price: 30.00},
    ]

    const [ design, setDesign ] = useState('0');
    const [ designState, setDesignState ] = useState([]);
    const [ chongosDesign, setChongosDesign ] = useState(false);
    const [ optionDesign, setOptionDesign ] = useState('0');
    const [ clientCustom, setClientCustom ] = useState(false);
    const [ sheetsState, setSheetsState ] = useState(false);
    const [ numberSheets, setNumberSheets ] = useState(0);
    const [ inputPrice, setInputPrice ] = useState(0.00)
    // const [ designTypes, setDesignTypes ] = useState([]);
    const [ sum, setSum ] = useState({});
    // const [ totalSum, setTotalSum ] = useState();


    const handleDesignChange = (e) => {
        setNumberSheets(0)
        setInputPrice(0.00)
        setDesign(e.target.value)
    }

    const handleOptionChange = (e) => {
        setNumberSheets(0)
        setInputPrice(0.00)
        setOptionDesign(e.target.value)
    }

    const handleSheetsChange = (e) => {
        setNumberSheets(Number(e.target.value))
    }

    const handleInputPriceChange = (e) => {
        setInputPrice(Number(e.target.value))
    }

    useEffect(() => {
        if(design === 'decopac'){
            setDesignState(decopac)
            setChongosDesign(false)
            setClientCustom(false)
            if(optionDesign === 'número de hojas'){
                setSheetsState(true)
            } else {
                setSheetsState(false)
            }
        } else if(design === 'diseño cliente'){
            setDesignState(clientDesign)
            setChongosDesign(false)
            setClientCustom(true)
            setSheetsState(false)
        } else if(design === 'imagenes alrededor'){
            setDesignState(images)
            setChongosDesign(false)
            setClientCustom(false)
            setSheetsState(false)
        } else if(design === 'flores'){
            setDesignState(flowers)
            setChongosDesign(false)
            setClientCustom(false)
            setSheetsState(false)
        } else if(design === 'chongos'){
            setDesignState([])
            setChongosDesign(true)
            setClientCustom(false)
            setSheetsState(false)
        }
    }, [design, optionDesign])

    useEffect(() => {
        const designValue = designState.find((value) => value.type === optionDesign);
        
        // if (designValue) {
        //     setDesignTypes(designValue);
        // } else {
        //     setDesignTypes([]); 
        // }

        setSum({
            designPrice: designValue ? designValue.price : 0.00,
            sheetsPrice: numberSheets ? numberSheets * 15.00 : 0.00,
            inputPrice: inputPrice ? inputPrice : 0.00
        });

    }, [designState, numberSheets, inputPrice])

    useEffect(() => {
        const totalPrices = Object.values(sum).reduce((primero, segundo) => primero + segundo, 0);
        // setTotalSum(totalPrices);
        changeDesignPrice(totalPrices)
    }, [sum])

    

  return (
    <>  
        <hr className="mb-3 mt-5"/>
        <h3 className="mb-3">Diseño</h3>
        <select 
            name="design" 
            className="form-select mb-3"
            value={design}
            onChange={handleDesignChange}
        >
            <option disabled value="0">--Diseño--</option>
            <option value="decopac">decopac</option>
            <option value="diseño cliente">diseño cliente</option>
            <option value="imagenes alrededor">imagenes alrededor</option>
            <option value="flores">flores</option>
            <option value="chongos">chongos</option>
        </select>

        {
            designState.length > 0  && 
                <>
                    <select 
                        className="form-select mb-3"
                        name="design"
                        value={optionDesign}
                        onChange={handleOptionChange}
                    >
                        <option disabled value="0">--Opción de diseño--</option>
                        {
                            designState.map((design) => (
                                <DesignElement 
                                    key={design.id}
                                    design={design}
                                    optionDesign={optionDesign}
                                    handleOptionChange={handleOptionChange}
                                />
                            ))
                        }
                    </select>
                    {
                        clientCustom &&
                        <>
                            <input 
                                className="form-control mb-2"
                                type="number" 
                                name="price" 
                                placeholder="número de hojas"
                                onChange={handleSheetsChange}
                            />
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
                                onChange={handleInputPriceChange}
                            />
                        </>  
                    }
                    {
                        sheetsState &&
                        <>
                            <input 
                                className="form-control mb-2"
                                type="number" 
                                name="price" 
                                placeholder="número de hojas"
                                onChange={handleSheetsChange}
                            />
                        </>
                    }
                </>
        }
        {
            chongosDesign === true && <ChongosElement handleInputPriceChange={handleInputPriceChange}/>
        }

    </>
  )
}

export default DesignComponent
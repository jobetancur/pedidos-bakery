import React from "react";
import { useEffect, useState } from "react";
import CakesTypes from "./CakesTypes";
import DesignTypes from "./DesignTypes";
import FlavorComponent from "../FlavorComponent/FlavorComponent";
import FillingComponent from "../FlavorComponent/FillingComponent";
import DesignComponent from "../DesignComponent/DesignComponent";

function FloorsComponent() {

    const oneFloor = [
        {
          id: 1, 
          type: '#4', 
          list: [
            {id: 1, type: 'redondo', price: 16.99},
            {id: 2, type: 'diseño', price: 21.99}
          ]
        },
        {
          id: 2, 
          type: '#6',
          list: [
            {id: 1, type: 'redondo', price: 36.99}
          ]
        },
        {
          id: 3, 
          type: '#8',
          list: [
            {id: 1, type: 'redondo', price: 48.99},
            {id: 2, type: 'diseño rosa chantilly', price: 54.99},
            {id: 3, type: 'con imagen comestible', price: 64.99},
            {id: 4, type: 'decopac y juguete', price: 69.99}
          ]
        },
        {
          id: 4, 
          type: '#1/4',
          list: [
            {id: 1, type: 'fruta', price: 67.99},
            {id: 2, type: 'decopac', price: 69.99}
          ]
        },
        {
          id: 5, 
          type: '#1/2',
          list: [
            {id: 1, type: 'fruta', price: 99.99},
            {id: 2, type: 'decopac', price: 105.99}
          ]
        },
        {
          id: 6, 
          type: '#3/4',
          list: [
            {id: 1, type: 'fruta', price: 119.99},
            {id: 2, type: 'decopac', price: 125.99}
          ]
        },
        {
          id: 7, 
          type: '#16',
          list: [
            {id: 1, type: 'plancha completa', price: 169.99}
          ]
        },
      ];
    
      const twoFloors = [
        {
          id: 1, 
          type: '#6 - #10',
          list: [
            {id: 1, type: '#6 - #10', price: 249.99},
          ]
        },
        {
          id: 2, 
          type: '#8 - #12',
          list: [
            {id: 1, type: '#8 - #12', price: 299.99},
          ]
        },
        {
          id: 3, 
          type: '#6 - #8',
          list: [
            {id: 1, type: '#6 - #8', price: 149.99},
          ]
        },
        {
          id: 4,
          type: '+60 personas',
          list: [
            {id: 1, type: '+60 personas', price: 4.99}
          ]
        }
      ];
    
      const threeFloors = [
        {
          id: 1, 
          type: '#6 - #8 - #10',
          list: [
            {id: 1, type: '#6 - #8 - #10', price: 319.99},
          ]
        },
        {
          id: 2,
          type: '+60 personas',
          list: [
            {id: 1, type: '+60 personas', price: 4.99}
          ]
        }
      ];
    
      const customCake = [
        {
          id: 1,
          type: '+60 personas',
          list: [
            {id: 1, type: '+60 personas', price: 4.99}
          ]
        }
      ];
    
      const [ sum, setSum ] = useState(
        { 
          designPrice: 0.00,
          peoplePrice: 0.00, 
          flavorPrice: 0.00, 
          sizePrice: 0.00,
          basicFilling: 0.00
        }
      );
      const [ totalSum, setTotalSum ] = useState();
      const [ floors, setFloors ] = useState(0.00);
      const [ type, setType ] = useState('0');
      const [ cakeType, setCakeType ] = useState([]);
      const [ design, setDesign ] = useState('0');
      const [ designTypes, setDesignTypes ] = useState([]);
      const [ people, setPeople ] = useState(0);
      const [ flavorPrice, setFlavorPrace ] = useState(0.00);
      const [ sizePrice, setSizePrice ] = useState(0.00);
      const [ basicFillingPrice, setBasicFillingPrice ] = useState(0.00);
      const [ customDesignPrice, setCustomDesignPrice ] = useState(0.00);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // setSum(sum = null)
        // setFloors(0.00);
        // setFlavor('0');
    
      };
    
      const handleFloorsChange = (e) => {
        setFloors(e.target.value);
        setType('0');
        setDesign('0');
        setPeople(0);
    
        if(e.target.value === '1 piso'){
          setCakeType(oneFloor)
        } else if (e.target.value === '2 pisos'){
          setCakeType(twoFloors)
        } else if(e.target.value === '3 pisos'){
          setCakeType(threeFloors)
        } else if (e.target.value === 'personalizado'){
          setCakeType(customCake)
        }
      };
    
      const handleTypeChange = (e) => {
        setType(e.target.value);
        setDesign('0');
        setPeople(0);
      };
    
      const handleDesignChange = (e) => {
        setDesign(e.target.value);
      };
    
      const handlePeopleChange = (e) => {
        setPeople(Number(e.target.value))
      }
    
      useEffect(() => {
        const typeValue = cakeType.find((value) => value.type === type);
        const designValue = designTypes.find((value) => value.type === design);
    
        if (typeValue) {
          setDesignTypes(typeValue.list);
        } else {
          setDesignTypes([]); 
        }
    
        setSum({
          designPrice: designValue ? designValue.price : 0.00,
          peoplePrice: people ? people * 4.99 : 0.00,
          flavorPrice: flavorPrice ? flavorPrice : 0.00,
          sizePrice: sizePrice ? sizePrice : 0.00,
          basicFilling: basicFillingPrice ? basicFillingPrice : 0.00,
          customDesignPrice: customDesignPrice ? customDesignPrice : 0.00
        });
        
      }, [type, cakeType, design, people, flavorPrice, sizePrice, basicFillingPrice, customDesignPrice])
    
      useEffect(() => {
    
        const totalPrices = Object.values(sum).reduce((primero, segundo) => primero + segundo, 0);
        setTotalSum(totalPrices);
    
      }, [sum]);
    
      const changeFlavorPrice = (price) => {
        setFlavorPrace(price)
      }
    
      const changeSizePrice = (price) => {
        setSizePrice(price);
      }
    
      const changeBasicFillingPrice = (price) => {
        setBasicFillingPrice(price);
        // setSum(prevSum => ({
        //   ...prevSum,
        //   basicFilling: price,
        // }));
      };
    
      const changeDesignPrice = (price) => {
        setCustomDesignPrice(price)
      }

  return (
    <div className="container">
      <h3 className="my-3">{ `Total: $${totalSum ? totalSum.toFixed(2) : 0 }` }</h3>
      <form onSubmit={handleSubmit}>
        <h3 className="my-3">Pisos</h3>
        <select 
          className="form-select mb-2" 
          name="floors" 
          value={floors}
          onChange={handleFloorsChange}
        >
          <option disabled value="0">--Pisos--</option>
          <option value="1 piso">1 piso</option>
          <option value="2 pisos">2 pisos</option>
          <option value="3 pisos">3 pisos</option>
          <option value="personalizado">personalizado</option>
        </select>
        {/* -------------------------- */}
        {/* Selector de tipo de pastel */}
        <select
          className="form-select mb-2" 
          name="flavor"
          value={type} 
          onChange={handleTypeChange} 
        >
          <option disabled value="0">--Tipos--</option>
          {
            cakeType.map((cake) => (
              <CakesTypes 
                key={cake.id}
                cake={cake} 
                handleFlavorChange={handleTypeChange}
              />
            ))
          }
        </select>
        {/* ---------------------------- */}
        {/* Selector de diseño de pastel */}
        {
          cakeType.map((cake) => {
            if(floors === 'personalizado' && cake.type === '+60 personas'){
              return (
                <React.Fragment key={cake.id}>
                  <input 
                    className="form-control mb-2" 
                    placeholder="# personas" 
                    type="number" 
                    name="people" 
                    onChange={handlePeopleChange}
                  />
                  <textarea 
                    className="form-control" 
                    type="text" 
                    name="floors" 
                    placeholder="especificaciones"
                  />
                </React.Fragment>
              )
            } else if (type === '+60 personas' && cake.type === '+60 personas') {
              return (
                <input 
                  className="form-control" 
                  placeholder="# personas" 
                  type="number" 
                  name="people" 
                  key={cake.id}
                  onChange={handlePeopleChange}
                />
              );
            } else if (type === cake.type) {
                return (
                  <select
                    className="form-select"
                    name="design"
                    value={design}
                    onChange={handleDesignChange}
                    key={cake.id}
                  >
                    <option disabled value="0">--Variantes--</option>
                    {
                      designTypes?.map((design) => (
                        <DesignTypes
                          key={design.id}
                          design={design}
                          handleDesignChange={handleDesignChange}
                        />
                      ))
                    }
                  </select>
                );
              } 
              return null;
          })
        }

        {/* Componente de sabor de pan */}
        <FlavorComponent changeFlavorPrice={changeFlavorPrice} />

        {/* Componente de relleno */}
        <FillingComponent 
          changeSizePrice={changeSizePrice} 
          changeBasicFillingPrice={changeBasicFillingPrice}
        />

        {/* Componente de diseño */}
        <DesignComponent changeDesignPrice={changeDesignPrice} />

        <button 
          type="submit" 
          className="btn btn-primary my-3"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default FloorsComponent
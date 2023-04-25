import { useState, useEffect } from 'react';
import './MenuListPage.css';


export const MenuListPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dishes, setDishes] = useState(() => JSON.parse(localStorage.getItem('dishes')) || []);

  const addDish = () => {
    if (name !== '' && description !== '' && price !== '') {
      const newDish = {
        name: name,
        description: description,
        price: price
      };
      setDishes([...dishes, newDish]);
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  const removeDish = (index) => {
    const newDishes = [...dishes];
    newDishes.splice(index, 1);
    setDishes(newDishes);
  };

  useEffect(() => {
    localStorage.setItem('dishes', JSON.stringify(dishes));
  }, [dishes]);

  return (
    <div className="App">
      <h1>Restorāna ēdienkarte</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Uzraksti jaunu ēdienu nosaukumu"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Uzraksti jaunu ēdienu aprakstu"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Cena"
          min="0"
          step="0.01"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button className="add-button" onClick={addDish}>
          + Pievienot
        </button>
      </div>
      {dishes?.length > 0 ? (
        <ul className="dish-list">
          {dishes.map((dish, index) => (
            <div className="dish" key={index}>
              <li>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <p>Cena: {dish.price} €</p>
              </li>
              <button
                className="delete-button"
                onClick={() => {
                  removeDish(index);
                }}
              >
                ✕ Dzēst
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>nav atrasts neviens ēdiens</p>
        </div>
      )}
    </div>
  );
};
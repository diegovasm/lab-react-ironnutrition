import logo from './logo.svg';
import './App.css';
// import SimpleFoodList from './components/SimpleFoodList';
import foods from '../src/foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Card, Col, Button, Divider, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodGrid, setFoodGrid] = useState(foods);
  const[search, setSearch] = useState('');
  const[showForm, setShowForm] = useState(true);

  const addFood = (newFood) => {
    setFoodGrid([...foods, newFood]);
  };

  function deleteFood(name){

    setFoodGrid(prevFood => prevFood.filter(food => food.name !== name))

  }
  return (
    <div className="App">

    {/* Iteração 4 */}
      {showForm && <AddFoodForm addFood={addFood}/>}
      <Button onClick={()=>{setShowForm(!showForm)}}> Hide Form / Add New Food</Button>

      {/* Interação 5 */}
      <Search search={search} setSearch={setSearch} />
      {/* Interação 3 */}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodGrid.filter((food) => (food.name).toLowerCase().includes(search.toLowerCase())).map((food, index) => {
          return (
            <div key={index}>
              <FoodBox food={food} deleteFood={deleteFood} />
            </div>
          );
        })}
      </Row>
      {/* <SimpleFoodList /> */}
      {/* Interação 2 */}
      {/* <FoodBox food={{
            "name": "Orange",
            "calories": 85,
            "image": "https://i.imgur.com/abKGOcv.jpg",
            "servings": 1
          }} /> */}
    </div>
  );
}

export default App;

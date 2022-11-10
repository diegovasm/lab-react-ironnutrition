// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories,setCalories] = useState("")
    const [servings, setServings] = useState("")

    //monitorar cada mudança no formulário

    const handleNameInput = (event) => {

        setName(event.target.value)

    }
    const handleImageInput = (event) => {

        setImage(event.target.value)

    }
    const handleCaloriesInput = (event) => {

        setCalories(event.target.value)

    }
    const handleServingsInput = (event) => {

        setServings(event.target.value)

    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        props.addFood(newFood)

    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
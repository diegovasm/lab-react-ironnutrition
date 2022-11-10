import foods from '../foods.json';
import {Card, List} from 'antd'
import { useState } from 'react';


function SimpleFoodList() {

  const [foodList, setFoodList] = useState(foods);

 
  const foodMap = foodList.map((food, index) => {
    
    return (

        
        <div key={index}>
        <p> {food.name} </p>
        <img src={food.image} alt="" width="10%" />
        </div>
    );

  });

  return (
        
        // <List
        //     itemLayout='vertical'
        //     size="large"
        //     pagination={{
        //         onChange: page => {
        //             console.log(page);
        //         },
        //         pageSize: 1,
        //     }}
        //     bordered
        //     dataSource={foodMap}
        //     renderItem={item=>
            
        //     <List.Item>
        //     <Card title={foodMap.name}>
        //         {foodMap}
        //     </Card>
            
        //     </List.Item>}

        // />
        <div>
            <h1>Food List</h1>
            <div>{foodMap}</div>
        </div>
        
  );
}

export default SimpleFoodList;

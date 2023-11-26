function FoodList(){
    //You can call api to get data
    //This is used as an example
    const food = [
        {
            id:0,// used in .jsx as a key
            name:'Orange'
        },
        {
            id:1,
            name:'Apple'
        },
        {
            id:2,
            name:'Carrot'
        },
    ];

    //Or we can create separate component FootItem
    const foodItems = food.map((foodItem) =>
    <li key={foodItem.id}>{foodItem.name}</li>
    );

    return(
        <ul>
            {foodItems}
        </ul>
    );
}
export default FoodList
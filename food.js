let food = [
    {
        name:"Food 1",
        price:"Rs 20",
        quantity:"1 Kg",
    },
    {
        name:"Food 2",
        price:"Rs 30",
        quantity:"2 Kg"
    },
    {
        name:"Food 3",
        price:"Rs 10",
        quantity:"1 Kg"
    },
    {
        name:"Food 4",
        price:"Rs 35",
        quantity:"1 Kg"
    },
    {
        name:"Food 5",
        price:"Rs 45",
        quantity:"1.5 Kg"
    }
];

for(let i=0;i<food.length;i++){
    console.log(`Description of your food ${i+1}`,food[i]);
}
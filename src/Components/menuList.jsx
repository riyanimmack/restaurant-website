import lasa from '../assets/background.jpg'
import pica from '../assets/pica.jpg'
import piza from '../assets/piza.jpg'
import crap from '../assets/crap.jpg'
import cick from '../assets/cick.jpg'
import drink from '../assets/drink.jpg'
import bur from '../assets/bur.jpg'
import bun from '../assets/bun.jpg'

const id = Date.now().toString(36) + Math.random().toString(36);

export const MenuList =[

    {
        id : "1",
        image:crap,
        name : "Italian Tortellini Pasta Salad",
        description: "A mix of cheesy tortellini, vibrant vegetables, and zesty dressing",
        price : 50,
        type : "drink",
        count : 1 
    },
    {
        id : "2",
        image:bun,
        name : "Aperol Spritz ",
        description: "A refreshing blend of Aperol, prosecco, sparkling water, and orange slices.",
        price : 40,
        type : "drink",
        count : 1 
    },
    
    
    {
        id : "3",
        image:cick,
        name : "Pollo alla Cacciatora",
        description: "A savory dish of tender chicken, tomatoes, onions, herbs, and wine.",
        price : 490,
        type : "main",
        count : 1 
    },
    {
        id:"4",
        image:bur,
        name : "Pizza Margherita",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price : 300,
        type : "main",
        count : 1 
    },
    {
        id:"5",
        image:drink,
        name : "Costoletta alla Milanese",
        description: "A crispy breaded veal cutlet, pan-fried in butter until golden.",
        price : 90,
        type : "main",
        count : 1 
    },
    {
        id:"6",
        image:bun,
        name : "Vitello Tonnato",
        description: "A chilled dish of thinly sliced veal topped with creamy tuna sauce.",
        price : 40,
        type : "main",
        count : 1 
    },
    {
        id:"7",
        image:bur,
        name : "Caprese Salad",
        description: "A simple mix of fresh mozzarella, ripe tomatoes, basil, and olive oil.",
        price : 50,
        type : "salad",
        count : 1 
    },
    {
        id:"8",
        image:pica,
        name : "Panzanella",
        description: "A flavorful mix of bread, juicy tomatoes, dressed in olive oil and vinegar.",
        price : 670,
        type : "salad",
        count : 1 
    },
    {
        id:"9",
        image:bun,
        name : "Italian Octopus Salad",
        description: "Tender octopus, crisp vegetables, olives, fresh herbs, and lemon dressing.",
        price : 75,
        type : "salad",
        count : 1 
    },
    {
        id:"10",
        image:lasa,
        name : "Burger",
        description: "A juicy beef patty, soft bun, melted cheese, lettuce, and pickles.",
        price : 50,
        type : "salad",
        count : 1 
    },
    {
        id:"11",
        image:drink,
        name : "Italian Rice Salad",
        description: "A vibrant mix of cooked rice, fresh vegetables, olives, and dressing.",
        price : 120,
        type : "salad",
        count : 1 
    },
    {
        id:"13",
        image:cick,
        name : "Italian Antipasto Salad",
        description: "A colorful mix of cured meats, cheeses, olives, vegetables, and dressing.",
        price : 230,
        type : "salad",
        count : 1 
    },
    {
        id:"14",
        image:piza,
        name : "Italian Salad with 3 Lettuces",
        description: "A fresh blend of three types of lettuce, vegetables, and vinaigrette.",
        price : 750,
        type : "salad",
        count : 1 
    },
    {
        id:"15",
        image:drink,
        name : "Italian Sub Broccoli Salad",
        description: "A hearty mix of broccoli, Italian meats, cheese, olives, and tangy dressing.",
        price : 80,
        type : "salad",
        count : 1 
    },
    
    {
        id:"16",
        image:bur,
        name : "Amaretto Liqueur",
        description: "A sweet, almond-flavored liqueur with hints of apricot and cherry.",
        price : 900,
        type : "drink",
        count : 1 
    },
    {
        id:"17",
        image:lasa,
        name : "Campari",
        description: "A bitter, red Italian liqueur made from herbs, fruit, and spices.",
        price : 865,
        type : "drink",
        count : 1 
    },
    {
        id:"18",
        image:crap,
        name : "Pinot Grigio",
        description: "A light, crisp white wine with citrus, green apple, and floral notes.",
        price : 950,
        type : "drink",
        count : 1 
    },
    {
        id:"19",
        image:drink,
        name : "Wine Chianti",
        description: "A robust red wine from Tuscany, featuring cherry, earthy, and spicy flavors.",
        price : 40,
        type : "drink",
        count : 1 
    },
    {
        id:"20",
        image:piza,
        name : "Barolo",
        description: "A rich, full-bodied red wine from Piedmont, with complex tannins and floral, fruity notes.",
        price : 670,
        type : "drink",
        count : 1 
    },
    {
        id:"21",
        image:lasa,
        name : "Lasagne alla Bolognese",
        description: "A hearty layered dish of pasta, rich Bolognese sauce, béchamel, and cheese.",
        price : 450,
        type : "main",
        count : 1 
    },
    {
        id:"22",
        image:pica,
        name : "Fettuccine al Pomodoro",
        description: "A simple yet delicious dish of fettuccine pasta, fresh tomato sauce, and basil.",
        price : 40,
        type : "main",
        count : 1 
    },
    {
        id:"23",
        image:piza,
        name : "Gnocchi di Patate",
        description: "Soft potato gnocchi, served with a variety of sauces, often buttery.",
        price : 560,
        type : "main",
        count : 1 
    },
    {
        id:"24",
        image:crap,
        name : "Melanzane alla Parmigiana",
        description: "Layers of fried eggplant, marinara sauce, mozzarella baked to perfection.",
        price : 250,
        type : "main",
        count : 1 
    },
    {
        id: "25",
        image:pica,
        name : "Limoncello",
        description: "A sweet, zesty lemon liqueur with a smooth, refreshing finish.",
        price : 45,
        type : "drink",
        count : 1 
    },
    
];
const menu={
  _courses:{
  appetizers:[],
  mains:[],
  desserts:[],
},
  get appetizers(){
    return this._courses.appetizers;
  },
    get mains(){
    return this._courses.mains;
  },
    get desserts(){
    return this._courses.desserts;
  },
    set appetizers(appetizers){
      this._courses.appetizers=appetizers;
    },
    set mains(mains){
      this._courses.mains=mains;
    },
    set desserts(desserts){
      this._courses.desserts=desserts;
    },
      get courses(){
        return{
          appetizers:this.appetizers,
          mains:this.mains,
          desserts:this.desserts,
        };
      },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish={
      name: dishName,
      price:dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes=this._courses[courseName];
    const randomIndex=Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex]; 
  },
  generateRandomMeal(){
    const appetizers=this.getRandomDishFromCourse('appetizers');
      const main=this.getRandomDishFromCourse('mains');
      const dessert=this.getRandomDishFromCourse('desserts');
      const totalPrice=appetizers.price+main.price+dessert.price;
    return `Yourl meal is ${appetizers.name},${main.name},${dessert.name}, and total price is ${totalPrice} $`;
  }
  };

menu.addDishToCourse('appetizers','salad',4.00);
menu.addDishToCourse('appetizers','fries',5.00);
menu.addDishToCourse('appetizers','tomatoes',2.00);

menu.addDishToCourse('mains','burger',6.00);
menu.addDishToCourse('mains','fries',3.00);
menu.addDishToCourse('mains','sousage',2.00);

menu.addDishToCourse('desserts','pancakes',4.00);
menu.addDishToCourse('desserts','cakes',5.00);
menu.addDishToCourse('desserts','ice cream',6.00);

const meal=menu.generateRandomMeal();
console.log(meal);

//Output first time: Yourl meal is salad,burger,pancakes, and total price is 14 $
//Output second time: Yourl meal is tomatoes,sousage,pancakes, and total price is 8 $

//0(n) signifies that the execution time of an algorithm grows linearly with the size of the input data set.

const groceries = ["milk", "bread", "eggs", "sugar", "choose", "flour"];

const searchForItems = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`found ${item}`);
    }
    console.log(`item not found ${item}`)
  }
};

searchForItems('juice');
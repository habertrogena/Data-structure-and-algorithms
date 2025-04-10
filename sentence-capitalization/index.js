const capitalizestr = (str) =>{
    return str
      .toLowerCase()
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
}
    
console.log(capitalizestr('habert rogena'));
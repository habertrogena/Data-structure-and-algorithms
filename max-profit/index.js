//imagine youre buying and selling stocks throught the year.
// your job is to find the biggest profit you could make by buying low and selling high only once
// heres what you are given; A list of stock prices for each day  [7,1,5,3,6,4]

//here is what you need to find ; the difference between the cheapest price you could have bought the stock
// //and the most expensive price youb could have sold it later on

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    //update minprice if the current price is lower
    if (price < minPrice) {
      minPrice = price;
    }
    //calculate the potential profit
    const profit = price - minPrice;
    //update maxprofit if the current profit is higher
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));


//What's the minimum loss if you're forced to buy high and sell low"? 

function minLoss(prices) {
  let maxPriceSoFar = -Infinity;
  let maxLoss = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (price > maxPriceSoFar) {
      maxPriceSoFar = price;
    }

    const loss = price - maxPriceSoFar;

    if (loss < maxLoss) {
      maxLoss = loss;
    }
  }

  return maxLoss; // Will be a negative number (a loss)
}

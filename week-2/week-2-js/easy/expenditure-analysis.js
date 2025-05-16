/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    // Create an empty object to store the total spent for each category
    const totals = {};

    // Loop through each transaction
    for (const transaction of transactions) {
        const { category, price } = transaction;

        // If the category already exists, add the price to the total
        if (totals[category]) {
            totals[category] += price;
        } else {
            // If it doesn't exist, initialize it with the price
            totals[category] = price;
        }
    }

    // Convert the totals object into an array of objects with the required format
    return Object.keys(totals).map(category => ({
        category: category,
        totalSpent: totals[category]
    }));
}

// Export the function for use in other files
module.exports = calculateTotalSpentByCategory;


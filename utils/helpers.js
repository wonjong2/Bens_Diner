module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  // Converts the item_list string storing the list of dishes in the order history into an array for client side parsing/usage
  orderHistory_to_Array: (historyString) => {
    let historyArray = historyString.split(",");
    return historyArray.map(entry => parseInt(entry))

  },
  // Converts the array storing the list of dishes in the order history into an string to store as an item_list entry in the orderHistory table
  orderHistory_to_String: (historyArray) => {
    var orderString ="";

    if(historyArray.length==1) {
      orderString = historyArray[0].toString();
      return orderString;
    }

    for (let i=0; i<historyArray.length-1; i++) {
      orderString = orderString + historyArray[i].toString() + ",";
    }

    orderString = orderString + historyArray[historyArray.length-1].toString();

    return orderString;
  }
};

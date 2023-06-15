for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(cards, occasion) {
    let messages = [];
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
}


writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}



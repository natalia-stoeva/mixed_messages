const luckySign = ['Sun.', 'Moon.', 'Earth.', 'Water.', 'Air.'];

const fortunes = [
  'You\'ll have a lot of good luck on Wednesday.', 
  'Good health will chace you all day. I mean on Monday. On Tuesday you\'ll start sneezing.',
   'You\'ll spend a whole amount of money on unexpected taxes. Twice.', 
   'A bad surprice awaits you. It\'s about your bank account, you know.', 
   'You will be involved in an romantic triangle. It ends bad.', 
   'Don\'t travel by bus. We expect rain today.', 
   'Sorry, but nothing interesting will happen on Tuesday.'
    ];

const sayings = [
  'An argument over a parking ticket will lead to romantic entanglement.',
   'Don\'t park your car near trees on Friday... The the stars say so.',
   'Stay away from stairs and hot water.', 
   'You will recieve a strage phone call.', 
   'You should go grocery shopping today. The meat is fresh.', 
   'A bartender will serve you cappucino and orange juice. The bartender is Aquarious.'
   ]


function generateRandomHoroscope () {
  let horoscope = ["Your lucky element today is:"];
  let randomSign = Math.floor(Math.random () * luckySign.length)
  horoscope.push(luckySign[randomSign]);

  let randomFortune = Math.floor(Math.random () * fortunes.length);
  horoscope.push(fortunes[randomFortune]);

  let randomSaying = Math.floor(Math.random () * sayings.length);
  horoscope.push(sayings[randomSaying]);

 
 return horoscope.join(" ")
}

console.log(generateRandomHoroscope())
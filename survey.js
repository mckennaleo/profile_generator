const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable    : )', (name) => {
  rl.question('What\'s an activity you like doing?    ', (activity) => {
    rl.question('What do you listen to while doing that?    ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)    ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?   ', (food) => {
          rl.question('Which sport is your absolute favourite?    ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!    ', (superpower) => {
              console.log(`Thank you for your input. \n Your name is ${name}. \n
              your favourite activity is ${activity}. \n
              your favourite music to listen to while doing ${activity} is ${music}. \n
              your favourite meal of the day is ${meal}, where you eat ${food}. \n
              you are a fan of ${sport}.\n
              your superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
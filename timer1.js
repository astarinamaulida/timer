const timer = function(inputs) {
  inputs.forEach((input) => {
    if (input >= 0 && !isNaN(input)) { // check if it is not a number
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input * 1000); // input times 1 second, then move to input2... etc
    }
  });
};

timer(process.argv.slice(2));
const ftoc = function(inputTemp) {
  return parseFloat(((inputTemp - 32) * (5/9)).toFixed(1));
};

const ctof = function(inputTemp) {
  return parseFloat(((inputTemp * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

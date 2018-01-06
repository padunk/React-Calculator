function ComputeOp(arr, curr){
  var newVal = arr.filter((el, idx, arai) => arai.indexOf(el) === idx);
  var prev = newVal[0];
  var next = curr;
  var operator = newVal[1];
  var result = 0;
  
  switch(operator) {
    case '+':
      result = prev + next;
      break;
    case '-':
      result = prev - next;
      break;
    case '÷':
      result = prev / next;
      break;
    case 'x':
      result = prev * next;
      break;
    default:
      result = next;
  }
    return result;
}

function DecimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    
    if (value < 0) {
      return -DecimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e'); 
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))); 
    // Shift back
    value = value.toString().split('e'); 
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  module.exports = {
    ComputeOp: ComputeOp,
    DecimalAdjust: DecimalAdjust};
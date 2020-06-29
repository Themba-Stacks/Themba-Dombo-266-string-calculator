function sums(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 999) {continue;}
    else {sum += parseInt(arr[i]);}
  }
  return sum;
}

function add(stringInput) {
  var NumExtractRegx = new RegExp(/-?\d+/g);
  var MultiDelimiterRegx = /(?<=\[).+?(?=\])/g;
  var SingleDelimiterRegx = /^\/\/(.+?)\n/;
  var negatives = stringInput.match(/-\d+/g);
  var NumFormatedString;
  var extractedDelimiter;
  var seperatedString;

  if (stringInput == "") {
    return 0;
  } else if (/(^.+\/\/)|(\W$)/.test(stringInput)) {
    throw Error("invalid input");
  } else if (negatives) {
    throw Error("negatives not allowed " + negatives);
  }

  if (MultiDelimiterRegx.test(stringInput)) {
    extractedDelimiter = stringInput.match(MultiDelimiterRegx);
    seperatedString = stringInput.split(/\n/);
    for (let i = 0; i < extractedDelimiter.length; i++) {
      if (i == 0) {NumFormatedString = seperatedString[1].replace(extractedDelimiter[i],"@");}
      else {NumFormatedString = NumFormatedString.replace(extractedDelimiter[i], "@");}
    }
    return sums(NumFormatedString.match(NumExtractRegx));
  } else if (SingleDelimiterRegx.test(stringInput)) {
    extractedDelimiter = stringInput.match(SingleDelimiterRegx);
    seperatedString = stringInput.split(/\n/);
    NumFormatedString = seperatedString[1].replace(extractedDelimiter[1], "@");
    return sums(NumFormatedString.match(NumExtractRegx));
  }else{
  return sums(stringInput.match(NumExtractRegx));
  }
}

module.exports = { add };

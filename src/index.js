module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if (number < 20) {return numbers[number]}

    const tennerNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num = Math.abs(number).toString().split('');
    const lengthNum = num.length - 1;  
    let result = [];
    if (number > 99) { result.push(numbers[num[lengthNum - 2]]);
           result.push('hundred');
    };
    if ((number % 100 > 0) && (number % 100 < 20)) {result.push(numbers[number % 100]);} else {
            if ((number % 100 !== 0)) {result.push(tennerNumbers[num[lengthNum - 1]])};
            if (num[lengthNum] != 0) {result.push(numbers[num[lengthNum]])}};
    return result.join(' ');
}
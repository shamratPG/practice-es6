const testNumbers = [45, 54, 87, 64, 79, 57, 89, 78, 68]
const totalResult = testNumbers.reduce((initial, eachItem) => initial + eachItem, 0);
console.log(totalResult);

const members = ['Abul', 'Kuddus', 'Kalam', 'Halim', 'Bokul', 'Sohan']

const allMembers = members.reduce((initial, names) => initial + ' ' + names, '');
console.log(allMembers)
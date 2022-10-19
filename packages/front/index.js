console.log('frontend')

const message = "Greetings from front";
const printAnotherMessage = (name) => console.log(`${message}, ${name}`);

module.exports = {
  frontMessage: message,
  printAnotherMessage
};
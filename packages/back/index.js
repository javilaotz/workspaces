console.log('backend')

const message = "Greetings from back";
const printAnotherMessage = (name) => console.log(`${message}, ${name}`);

module.exports = {
  backMessage: message,
  printAnotherMessage
};
let delay = 1000;

function printHello() {
  setTimeout(() => {
    console.log('Hello world');
    delay += 1000;
    printHello();
  }, delay);
}

printHello();

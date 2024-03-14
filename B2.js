let count = 0;

function printHello() {
  if (count < 5) {
    console.log('Hello world');
    count++;
    setTimeout(printHello, 1000);
  } else {
    console.log('Done');
  }
}

printHello();

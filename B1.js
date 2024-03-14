const printDelayText = (text, time) => setTimeout(() => console.log(text), time);

printDelayText('Hello after 4 seconds', 4000);
printDelayText('Hello after 4 seconds', 8000);

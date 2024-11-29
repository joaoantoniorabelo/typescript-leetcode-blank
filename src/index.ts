/* Simple code containing types to ensure the build is working with TypeScript */
const helloMessage: string = "Hello TypeScript!";

const sayHello = (text: string) => {
    return `Saying ... ${text}`;
};

console.log(sayHello(helloMessage));

// Confirm all code have been execute
console.log("[DONE]")
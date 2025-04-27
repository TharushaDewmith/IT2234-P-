(01) asynpro.js

fs.readFile(...) --> Starts reading the file (asynchronously).

console.log("File reading is done...") --> Runs immediately after the read starts.

console.log(data) --> Runs later, after file is successfully read.

console.error(err) --> Runs if there's a problem reading the file.

![01](https://github.com/user-attachments/assets/dfcfd9a6-2591-49b9-a3a5-6ca80c77bc56)


(02)promise.js

1. const fs = require('fs').promises;
This imports the Promise-based version of Node.js's File System (fs) module.
Now you can use fs.readFile() which returns a Promise, instead of using a callback.

2. const readFile = (filepath) => { ... }
This is a function that takes a file path as input (filepath).
However, it does not use that parameter.
It always reads from 'file1.txt' (hardcoded), not the input file.

3. return fs.readFile('file1.txt', 'utf8');
This line starts reading 'file1.txt' in UTF-8 encoding.
It returns a Promise, which will:
resolve with the file content if successful,
or reject with an error if it fails.

4. readFile('file.txt')...
You call readFile() with 'file.txt', but again — it still reads 'file1.txt' because of the hardcoded path.

5. .then((data) => { console.log(data); })
If the file is read successfully, it logs the file content.

6. .catch((err) => { console.error(err); })
If there's an error (e.g. file not found), it catches and logs the error message.

This .catch() is useful especially when dealing with multiple asynchronous file reads, since all errors can be handled in one place.
![02](https://github.com/user-attachments/assets/809994a4-0db2-4bce-8bb9-0531410fc9f7)


(03)asynawait.js

async/await --> Makes asynchronous code look more like regular sync code.

fs.promises.readFile --> Reads a file and returns a promise with its content.

Promise.allSettled --> Waits for all promises to settle (succeed or fail), without short-circuiting on errors.

result.status --> Tells if the promise was fulfilled or rejected.

result.value / result.reason --> Contains the result (file content) or the error (why it failed).
![03](https://github.com/user-attachments/assets/5e60020b-71e7-45dc-88ff-262403084067)
![04](https://github.com/user-attachments/assets/30fa11ac-1899-4e63-95dd-e7e9f3ea4689)


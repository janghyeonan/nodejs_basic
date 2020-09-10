const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString);

//host(root domain)
console.log(myUrl.host);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));


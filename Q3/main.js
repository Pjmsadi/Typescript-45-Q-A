var personName = "Sadia Batool";
//to Lowercase
console.log("Lowercase: ", personName.toLowerCase());
//to Uppercase
console.log("Uppercase: ", personName.toUpperCase());
//to Titlecase
console.log("Titlecase: ", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));

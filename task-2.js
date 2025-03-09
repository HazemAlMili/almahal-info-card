const cities = ["Berlin", "Paris", "Cairo", "New York", "Tokyo"];
const targetCity = "gana"; // City to search for
let found = false;
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === targetCity) {
    found = true; // City found, exit the loop
    break;
  }
}
//print the result of founded
if (found) {
  console.log("the city is found");
} else {
  console.log("the city is not found");
}

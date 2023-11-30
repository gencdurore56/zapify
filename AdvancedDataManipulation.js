/* 
Filename: AdvancedDataManipulation.js

Description:
This code performs advanced data manipulation tasks using JavaScript.
It includes functions for sorting, filtering, merging, and transforming data.
*/

// Sample data for demonstration
const data = [
  { id: 1, name: 'John Doe', age: 25, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 30, city: 'London' },
  { id: 3, name: 'Tom Brown', age: 35, city: 'Sydney' },
  { id: 4, name: 'Alice Johnson', age: 28, city: 'Paris' },
  { id: 5, name: 'Mike Wilson', age: 32, city: 'Tokyo' },
  { id: 6, name: 'Emily Davis', age: 27, city: 'Berlin' },
  { id: 7, name: 'Max Anderson', age: 31, city: 'Toronto' },
];

// Sorting the data by age in descending order
const sortedData = data.sort((a, b) => b.age - a.age);

console.log('Sorted Data:');
console.log(sortedData);

// Filtering the data to include only people above 30 years old
const filteredData = data.filter((person) => person.age > 30);

console.log('Filtered Data:');
console.log(filteredData);

// Merging two arrays based on a common property (id)
const additionalData = [
  { id: 4, profession: 'Engineer' },
  { id: 5, profession: 'Doctor' },
  { id: 6, profession: 'Designer' },
];

const mergedData = data.map((person) => ({
  ...person,
  ...additionalData.find((additional) => additional.id === person.id),
}));

console.log('Merged Data:');
console.log(mergedData);

// Transforming the data to calculate average age per city
const transformedData = data.reduce((acc, person) => {
  if (acc[person.city]) {
    acc[person.city].totalAge += person.age;
    acc[person.city].count++;
  } else {
    acc[person.city] = { totalAge: person.age, count: 1 };
  }
  return acc;
}, {});

Object.keys(transformedData).forEach((city) => {
  transformedData[city].averageAge =
    transformedData[city].totalAge / transformedData[city].count;
});

console.log('Transformed Data:');
console.log(transformedData);

// ... Additional complex data manipulation code ...

// ... Other functions and calculations ...

// ... More code ...

// ... Keep extending as needed ...

// End of code.
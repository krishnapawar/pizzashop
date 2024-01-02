// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(__dirname, 'data.json');

// // Function to read data from the file
// function readData() {
//   try {
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     return JSON.parse(jsonData);
//   } catch (error) {
//     console.error('Error reading data:', error.message);
//     return [];
//   }
// }

// // Function to write data to the file
// function writeData(data) {
//   try {
//     const jsonData = JSON.stringify(data, null, 2);
//     fs.writeFileSync(filePath, jsonData, 'utf8');
//     console.log('Data written to file successfully.');
//   } catch (error) {
//     console.error('Error writing data:', error.message);
//   }
// }

// // Function to generate a unique ID
// function generateUniqueId(data) {
//   const existingIds = data.map(item => item.id);
//   const newId = Math.max(...existingIds, 0) + 1;
//   return newId;
// }

// // Function to create a new item
// function createItem(newItem) {
//   const data = readData();
//   newItem.id = generateUniqueId(data);
//   data.push(newItem);
//   writeData(data);
// }

// // Function to read all items
// function readAllItems() {
//   const data = readData();
//   return data;
// }

// // Function to read a single item by ID
// function readItemById(itemId) {
//   const data = readData();
//   return data.find(item => item.id === itemId);
// }

// // Function to update an item by ID
// function updateItemById(itemId, updatedData) {
//   const data = readData();
//   const index = data.findIndex(item => item.id === itemId);
//   if (index !== -1) {
//     data[index] = { ...data[index], ...updatedData };
//     writeData(data);
//     console.log('Item updated successfully.');
//   } else {
//     console.error('Item not found.');
//   }
// }

// // Function to delete an item by ID
// function deleteItemById(itemId) {
//   const data = readData();
//   const newData = data.filter(item => item.id !== itemId);
//   if (newData.length < data.length) {
//     writeData(newData);
//     console.log('Item deleted successfully.');
//   } else {
//     console.error('Item not found.');
//   }
// }
// // Function to delete data based on a custom condition
// function deleteData(conditionCallback) {
//     const data = readData();
//     const newData = data.filter(item => !conditionCallback(item));
//     if (newData.length < data.length) {
//       writeData(newData);
//       console.log('Data deleted successfully based on custom condition.');
//     } else {
//       console.error('No data found based on custom condition.');
//     }
// }
// // Function to find data based on a custom condition
// function findData(data,conditionCallback) {
//     // const data = readData();
//     // return data.filter(conditionCallback);
//     return  data.find(item => conditionCallback(item));
//     if (foundItem && data) {
//         console.log('Data found:', foundItem);
//     } else {
//         console.error('No data found based on custom condition.');
//     }
// }

// export {
//   readData,
//   writeData,
//   readAllItems,
//   createItem,
//   readItemById,
//   deleteItemById,
//   updateItemById,
//   deleteData,
//   findData
// };


// // Example usage:

// // // Create a new item
// // createItem({ name: 'New Item' });

// // // Read all items
// // const allItems = readAllItems();
// // console.log('All Items:', allItems);

// // // Read a single item by ID
// // const itemIdToRead = 1; // Replace with the desired ID
// // const itemToRead = readItemById(itemIdToRead);
// // console.log('Item with ID', itemIdToRead, ':', itemToRead);

// // // Update an item by ID
// // const itemIdToUpdate = 1; // Replace with the desired ID
// // updateItemById(itemIdToUpdate, { name: 'Updated Item' });

// // // Delete an item by ID
// // const itemIdToDelete = 2; // Replace with the desired ID
// // deleteItemById(itemIdToDelete);

// // Example usage:

// // // Find data where user_id is 1
// // findData(item => item.user_id === 1);

// // // Find data where name is 'John'
// // findData(item => item.name === 'John');

// // // Find data where age is greater than 30
// // findData(item => item.age > 30);

// // Example usage:

// // // Delete data where user_id is 1
// // deleteData(item => item.user_id === 1);

// // // Delete data where name is 'John'
// // deleteData(item => item.name === 'John');

// // // Delete data where age is greater than 30
// // deleteData(item => item.age > 30);
// const character = "#";
// const count = 8;
// const rows = [];
// let inverted = true;

// function padRow(rowNumber, rowCount) {
//     return (
//         " ".repeat(rowCount - rowNumber) +
//         character.repeat(2 * rowNumber - 1) +
//         " ".repeat(rowCount - rowNumber) +
//         " ".repeat(rowCount - rowNumber) +
//         " " +
//         character.repeat(2 * rowNumber - 1) +
//         " ".repeat(rowCount - rowNumber)
//     );
// }

// function padRowReverse(rowNumber, rowCount) {
//     return (
//         " ".repeat(rowCount - rowNumber) +
//         character.repeat(2 * rowNumber - 1) +
//         " ".repeat(rowCount - rowNumber) +
//         " ".repeat(rowCount - rowNumber) +
//         " " +
//         character.repeat(2 * rowNumber - 1) +
//         " ".repeat(rowCount - rowNumber)
//     );
// }

// for (let i = 1; i <= count; i++) {
//     if (inverted) {
//         rows.unshift(padRow(i, count));
//     } else {
//         rows.push(padRow(i, count));
//     }
// }

// for (let i = 1; i <= count; i++) {
//     if (!inverted) {
//         rows.unshift(padRowReverse(i, count));
//     } else {
//         rows.push(padRowReverse(i, count));
//     }
// }

// let result = "";

// for (const row of rows) {
//     result = result + row + "\n";
// }

// console.log(result);

// Cara lain membuat segitiga
function segitiga(rowCount) {
    for (let i = rowCount; i >= 1; i--) {
        console.log(" ".repeat(rowCount - i) + "*".repeat(2 * i - 1));
    }
}

segitiga(8);

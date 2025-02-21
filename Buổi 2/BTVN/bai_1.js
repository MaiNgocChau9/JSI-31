let cargoHold = ['oxygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket'];

// 1
for (let i = 0; i < cargoHold.length; i++) {
    if (cargoHold[i] === 'slinky') cargoHold[i] = 'space tether';
}
console.log(cargoHold);

// 2
console.log(cargoHold.pop());
console.log(cargoHold);

// 3
cargoHold.unshift(1138);
console.log(cargoHold);
cargoHold.push('20 meters');
console.log(cargoHold);

// 4
console.log(`Mảng cuối cùng: [${cargoHold}] | Độ dài mảng: ${cargoHold.length}`);
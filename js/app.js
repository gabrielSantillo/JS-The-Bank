let bank_name = `RBC`;
let number_of_branches = 900;
let is_canadian = false;

if (number_of_branches >= 1000 && is_canadian === true) {
    console.log(bank_name);
} else if (number_of_branches >= 1000 & is_canadian === false) {
    console.log(`The ${bank_name} is american.`);
} else {
    console.log(`Not considered.`);
}

let bank = {
    name: `TD Canada Trust`,
    number_of_branches: 999,
    is_canadian: false
}

if (bank[`number_of_branches`] >= 1000 && bank[`is_canadian`] === true) {
    console.log(bank[`name`]);
} else if (bank[`number_of_branches`] > 1000 && bank[`is_canadian`] === false) {
    console.log(`The ${bank[`name`]} is american.`);
} else {
    console.log(`Not considered.`);
}

let banks = [
    {
        name: `RBC`,
        number_of_branches: 999,
        is_canadian: true
    },
    {
        name: `TD Canada Trust`,
        number_of_branches: 1235,
        is_canadian: true
    },
    {
        name: `BMO`,
        number_of_branches: 795,
        is_canadian: true
    },
    {
        name: `JP Morgan`,
        number_of_branches: 4562,
        is_canadian: false
    },
    {
        name: `Bank of America`,
        number_of_branches: 49,
        is_canadian: false
    }
]

let counter = 0;
while (counter < banks.length) {
    if(banks[counter][`is_canadian`] === true){
        console.log(`${banks[counter][`name`]} is Canadian.`)
    }
    counter++;
}

for(let counter = 0; counter < banks.length; counter++) {
    if(banks[counter][`number_of_branches`] < 50) {
        console.log(`The bank ${banks[counter][`name`]} has less than 50 branches.`)
    }
}
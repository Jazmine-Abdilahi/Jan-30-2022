for (let i = jaz.length - 1; i >= 0; i--) {
    console.log(i, jazz[1]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight reptition ${rep}<3`);
    }
}

/////////////////////////////////////////////////////////////


let rep = 1;
while (rep <= 10) {
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dic !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}


/////////////////////////////////////////////////////////////


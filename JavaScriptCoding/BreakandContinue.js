
//break statement is used to break the loop when a certain condition is met. It will exit the loop immediately and the control will be transferred to the next statement after the loop.
for (let i = 0; i <= 10; i++) {

    console.log("Welcome", i);

    if (i == "5") {
        break;
    }
}

//continue statement is used to skip the current iteration of the loop when a certain condition is met. It will skip the rest of the code inside the loop for that particular iteration and move to the next iteration.
for (let i = 0; i <= 10; i++) {

    if (i == "5" || i == "10") {
        continue;
    }

    console.log("Welcome continue", i);
}
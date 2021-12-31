// const myAlert = () => {
//   const x = "Help! I think I found a clue!";
//   let count = 0;
//   const alerter = () => {
//     console.log(`${x} ${++count}`);
//   };

//   return alerter;
// };

// const funcAlert = myAlert();
// const funcAlert2 = myAlert();
// myAlert();
// funcAlert();
// funcAlert();
// myAlert();
// myAlert();
// funcAlert();

const concatenate = () => {
    count = 0
    console.log('Working ^_^')
    const call = () => {
        console.log('Yes!', count++)
    }
    return call;
}

const hdl = concatenate(); 
hdl();
hdl();
hdl();
concatenate()();
concatenate()();
concatenate()();



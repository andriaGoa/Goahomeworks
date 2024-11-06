// for ციკლის გამოყენება
for (let i = 0; i < array.length; i++) {
    // თუ callback ფუნქციის დაბრუნებული მნიშვნელობა არის true
    if (callback(array[i])) {
        result.push(array[i]); // დაამატეთ ახალ მასივში
    }
}

return result; // დააბრუნეთ ახალი მასივი
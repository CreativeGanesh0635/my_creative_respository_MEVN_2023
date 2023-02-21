const arr = ['Ganesh', 'Rushikesh', 'Sagar'];
const arr2 = [100, 200, 300, 400];
arr.push('Sunil');
arr2.push(500);
arr.forEach(element => {
    console.log(element);
});

arr2.forEach(element => {
    console.log(element);
});

const cars = ['Fararri', 'Benz', 'Bugatti'];
cars.unshift('Maruti');
console.log(cars);
console.log(findcars('Fararri'));// no error
// cars.findIndex(findcars('Benz'));// it has error

cars.findIndex(findcars);

function findcars(cars){
    return cars == "Fararri";
}

const ages = [12,21,32,23];
ages.findIndex(checkage);
ages.sort();
ages.reverse();

function checkage(age){
    return age > 25;
}

const vehicle = ["BMW", "Mercedes"];

const brand = {
    "Name": "TATA",
    "HeadQuater": "Pune",
}
class CarVisitor {
    visit(car) {
        if (car.seats > 2) {
            console.log('This is clearly a car for old people');
        } else {
            console.log('My bet is this car has at least 2 cylinders');
        }
    }
}

class TruckVisitor {
    visit(truck) {
        if (truck.towPackage) {
            console.log('We need to buy a boat');
        }
    }
}

class MonsterTruckVisitor {
    visit(monsterTruck) {
        if (monsterTruck.looksLikeADragon) {
            console.log('That is a badass monster truck');
        } else {
            console.log('Loser');
        }
    }
}

class Car {
    constructor() {
        this.seats = 5;
        this.doors = 4;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}

class Truck {
    constructor() {
        this.towPackage = true;
        this.doors = 2;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}

class MonsterTruck {
    constructor() {
        this.looksLikeADragon = true;
        this.doors = 1.5;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}

// Test
const myCar = new Car();
myCar.seats = 2;
myCar.accept(new CarVisitor());

const myMonsterTruck = new MonsterTruck();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());
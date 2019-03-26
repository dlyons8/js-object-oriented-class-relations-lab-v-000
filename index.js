let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;

      store.drivers.push(this);
    }
    trips() {
        return store.trips.find(
           function(trip) {
               return trip.driverId === this.id;
           }.bind(this)
       );
     }
     passengers() {
         return store.passengers.find(
             function(passenger) {
                 return passenger.driverId === this.id;
             }.bind(this)
         );
     }
};

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name;

    store.passengers.push(this);
  }
  trips() {
    return store.trips.find(
        function(trip) {
            return trip.passengerId === this.id;
        }.bind(this)
    );
   }
   drivers() {
       return store.drivers.find(
           function(driver) {
               return driver.passengerId === this.id;
           }.bind(this)
       );
   }
};

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.setDriver(driver);
    }
    if (passenger) {
      this.setPassenger(passenger);
    }

    store.trips.push(this);
  }
  setDriver(driver) {
    this.driverId = driver.id;
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  driver() {
      return store.drivers.find(
          function(driver) {
              return driver.tripId === this.id;
          }.bind(this)
      );
  }
  passenger() {
      return store.passengers.find(
          function(passenger) {
              return passenger.tripId === this.id;
          }.bind(this)
      );
  }
};

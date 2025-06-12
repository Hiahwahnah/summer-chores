function simulateChore(name, task, duration, sleepChance, failMessage, successMessage, callback) {
  setTimeout(() => {
    const asleep = Math.random() < sleepChance;
    if (asleep) {
      callback(`${name} ${failMessage}`);
    } else {
      console.log(`${name} ${successMessage}`);
      callback(null);
    }
  }, duration);
}

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback(null);
  }, 2000);
}

function weedEat(name, callback) {
  simulateChore(name, 'weedEat', 1500, 0.3, 'fell asleep after mowing the yard.', 'finished using the weed eater.', callback);
}

function trimHedges(name, callback) {
  simulateChore(name, 'trimHedges', 1000, 0.4, 'fell asleep after weed eating the yard.', 'finished trimming the hedges.', callback);
}

function collectWood(name, callback) {
  simulateChore(name, 'collectWood', 2500, 0.5, 'fell asleep after trimming the hedges.', 'finished collecting wood.', callback);
}

function waterGarden(name, callback) {
  simulateChore(name, 'waterGarden', 500, 0.6, 'fell asleep after collecting wood.', 'finished watering the garden.', callback);
}

function doSummerChores(name) {
  mowYard(name, (err) => {
    if (err) return console.log(err);
    weedEat(name, (err) => {
      if (err) return console.log(err);
      trimHedges(name, (err) => {
        if (err) return console.log(err);
        collectWood(name, (err) => {
          if (err) return console.log(err);
          waterGarden(name, (err) => {
            if (err) return console.log(err);
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

// Run it
doSummerChores("Richard");
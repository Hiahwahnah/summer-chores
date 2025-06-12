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
    console.log(`${name} mowed the yard and it looks great!`);
    callback(null);
  }, 2000);
}

function weedEat(name, callback) {
  simulateChore(name, 'weedEat', 1500, 0.3, 'fell asleep after mowing the yard. He must have been tired.', 'killed all those pesky weeds!', callback);
}

function trimHedges(name, callback) {
  simulateChore(name, 'trimHedges', 1000, 0.4, 'fell asleep after weed eating the yard. That was too much work for today.', 'got those hedges looking amazing!', callback);
}

function collectWood(name, callback) {
  simulateChore(name, 'collectWood', 2500, 0.5, 'fell asleep after trimming the hedges, but they sure do look good, am I right?', 'piled up all the wood.', callback);
}

function waterGarden(name, callback) {
  simulateChore(name, 'waterGarden', 500, 0.6, 'fell asleep after collecting wood. It really wore him out.', 'finished watering the garden.', callback);
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
            console.log(`${name} worked hard and got all his chores done!`);
          });
        });
      });
    });
  });
}

// Run it
doSummerChores("Richard");
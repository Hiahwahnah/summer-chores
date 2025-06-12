function simulateChore(name, duration, sleepChance, failMessage, successMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const asleep = Math.random() < sleepChance;
      if (asleep) {
        reject(`${name} ${failMessage}`);
      } else {
        console.log(`${name} ${successMessage}`);
        resolve(name);
      }
    }, duration);
  });
}

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return simulateChore(name, 1500, 0.3, 'fell asleep after mowing the yard.', 'finished using the weed eater.');
}

function trimHedges(name) {
  return simulateChore(name, 1000, 0.4, 'fell asleep after weed eating the yard.', 'finished trimming the hedges.');
}

function collectWood(name) {
  return simulateChore(name, 2500, 0.5, 'fell asleep after trimming the hedges.', 'finished collecting wood.');
}

function waterGarden(name) {
  return simulateChore(name, 500, 0.6, 'fell asleep after collecting wood.', 'finished watering the garden.');
}

async function doSummerChores(name) {
  try {
    const afterMow = await mowYard(name);
    const afterWeed = await weedEat(afterMow);
    const afterTrim = await trimHedges(afterWeed);
    const afterWood = await collectWood(afterTrim);
    await waterGarden(afterWood);
    console.log(`${name} finished all their chores!`);
  } catch (err) {
    console.log(err);
  }
}

doSummerChores("Richard");

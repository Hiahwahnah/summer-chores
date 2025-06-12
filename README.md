# Summer Chores Simulator

This exercise simulates a person's Saturday summer chore routine using asynchronous JavaScript.

There are **three versions** of the solution:

- `callbackVersion.js` — uses **callback functions**
- `promiseVersion.js` — uses **Promises**
- `asyncAwaitVersion.js` — uses **async/await**

In all versions, the simulation follows a strict order of chores. At each step, the person becomes more tired and may fall asleep, preventing them from completing the remaining chores.

---

## Exercise Description

Someone has a list of summer chores they have to do every Saturday. There are a lot of chores for them to do and they naturally get more tired as they work. If they get too tired, they may fall asleep before completing all their chores.

They have a strict routine, which follows in order:

1. Mowing the yard  
2. Weedeating the edges of the house and fence line  
3. Trimming the hedges  
4. Collect fallen wood for summer night fires  
5. Water the garden

If they manage not to get tired and fall asleep while doing their chores, they have successfully completed their tasks. There is **no chance** of falling asleep before mowing the yard.

---

## Time to Complete Chores

| Chore               | Time to Complete (ms) |
|---------------------|-----------------------|
| Mow the yard        | 2000 ms               |
| Weed eat the yard   | 1500 ms               |
| Trim the hedges     | 1000 ms               |
| Collect fallen wood | 2500 ms               |
| Water the garden    | 500 ms                |

---

## Versions

### `callbackVersion.js`

Implements the simulation using traditional **callback functions** to manage asynchronous operations.

Each function takes in a person's name and a callback. On completion or failure, the appropriate message is logged.

Sample command:

```bash
node callbackVersion.js
```

### `promiseVersion.js`

Implements the simulation using JavaScript Promises. Chores are chained using .then() and errors (such as falling asleep) are handled with .catch().

This version provides improved readability and avoids "callback hell."

Sample command:

```bash
node promiseVersion.js
```

### `asyncAwaitVersion.js`

Implements the simulation using async/await for a more synchronous-looking flow with centralized error handling using try/catch.

This version is the cleanest and easiest to follow for sequential asynchronous logic.

Run with:

```bash
node asyncAwaitVersion.js
```

## Requirements to run

- [Node.js](https://nodejs.org/) installed

### Running the Project

1. Open a terminal.  
2. Run any version with one of the following commands:
   - `node callbackVersion.js`
   - `node promiseVersion.js`
   - `node asyncAwaitVersion.js`
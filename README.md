# Summer Chores Simulator

This exercise simulates a person's Saturday summer chore routine using asynchronous JavaScript and callback functions.

The simulation follows a strict order of chores. At each step, the person becomes more tired and may fall asleep, preventing them from completing the remaining chores.

---

## Exercise Description

Someone has a list of summer chores they have to do every Saturday. There are a lot of chores for them to do and naturally get more tired throughout completing their tasks. If they get too tired, they may fall asleep before completing all their chores.

They have a strict routine, which follows in order:

1. Mowing the yard  
2. Weedeating the edges of the house and fence line  
3. Trimming the hedges  
4. Collect fallen wood for summer night fires  
5. Water the garden

If they manage not to get tired and fall asleep while doing their chores, they have successfully completed their chores. Also, there's never a chance of the person falling asleep before mowing the yard.

## Requirements and Information

The time to complete each chore is an arbitrarily selected value for the purpose of the exercise. They are the following:

### Time to Complete Chores

| Chore               | Time to Complete (in milliseconds) |
|---------------------|------------------------------------|
| Mow the yard        | 2000 ms                           |
| Weed eat the yard   | 1500 ms                           |
| Trim the hedges     | 1000 ms                           |
| Collect fallen wood | 2500 ms                           |
| Water the garden    | 500 ms                            |

### Required Functions

#### `mowYard(name, callback)`  
A function that takes in a person's name and a callback function.  
When the chore is complete, logs:  
`"PERSON'S NAME mowed the yard."`

---

#### `weedEat(name, callback)`  
A function that takes in a person's name and a callback function.  
If the chore is completed, logs:  
`"PERSON'S NAME finished using the weed eater."`  
Otherwise, logs:  
`"PERSON'S NAME fell asleep after mowing the yard."`

---

#### `trimHedges(name, callback)`  
A function that takes in a person's name and a callback function.  
If the chore is completed, logs:  
`"PERSON'S NAME finished trimming the hedges."`  
Otherwise, logs:  
`"PERSON'S NAME fell asleep after weed eating the yard."`

---

#### `collectWood(name, callback)`  
A function that takes in a person's name and a callback function.  
If the chore is completed, logs:  
`"PERSON'S NAME finished collecting wood."`  
Otherwise, logs:  
`"PERSON'S NAME fell asleep after trimming the hedges."`

---

#### `waterGarden(name, callback)`  
A function that takes in a person's name and a callback function.  
If the chore is completed, logs:  
`"PERSON'S NAME finished watering the garden."`  
Otherwise, logs:  
`"PERSON'S NAME fell asleep after collecting wood."`

---

#### `doSummerChores(name)`  
A function that takes in a person's name as an argument.  
It starts the chore sequence by calling `mowYard`, then continues through the rest using callbacks.  
If all chores are completed, logs:  
`"PERSON'S NAME finished all their chores!"`

## Requirements to run

- [Node.js](https://nodejs.org/) installed

### Steps

1. Open a terminal.  
2. Run the file with:

```bash
node callbackVersion.js
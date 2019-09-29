# marsbot

A model of robots on a rectangular planet.



## Running a scenario

Everything's setup to read from `instructions.txt`, so you can run the scenario by doing

```bash
npm start
```

To run a different scenario, overwrite `instructions.txt`.

## Format

Format should be like the following

```
10 10
3 2 N
FFLF
5 2 W
RFLFFFLFRF
3 6 E
LFFRFLFRF
```

The first line determines the size of the planet.

The lines after that define robots, with an initial position and orientation, followed by a series of commands.

`3 2 N` means a robot is at the location _(3,2)_ on the planet, and is looking North.

In the series of commands:

* `F` means _move forwards_
* 'L' means _rotate a quarter-turn anticlockwise_
* 'R' means _rotate a quarter-turn clockwise_

It will therefore move forwards to _(3,3)_ when given the first `F` command,
then forwards again (second `F`),
then turn anticlockwise (`L`) to face west and then step forwards again (`F`).
It will arrive at `2 4 W`.

import {
  Cardinal, 
  Position, 
  CommandName,
} from './commands';

import { 
  Room,
  Shape,
  getNextPosition,
} from './room';

export interface Robot {
  position: Position;
  cardinal: Cardinal;
}

export const executeCommand = (robot: Robot, room: Room<Shape>, commandName: CommandName): Robot => {
  return commandName === CommandName.Forward 
  ? move(robot, room)
  : turn(robot, commandName);
};

const move = (robot: Robot, room: Room<Shape>): Robot => {
  room.isValidPosition(getNextPosition(robot.position, robot.cardinal))
  ? robot.position = getNextPosition(robot.position, robot.cardinal)
  : console.log('Invalid position!');

  return robot;
}

const turn = (robot: Robot, commandName: CommandName): Robot => {
  return { ...robot, cardinal: getNewCardinal(robot.cardinal, commandName) };
}

const getNewCardinal = (currentCardinal: Cardinal, commandName: CommandName): Cardinal => {
  if (commandName === CommandName.Left) {
    return currentCardinal === Cardinal.North ? Cardinal.West : currentCardinal - 1;
  } else {
    return currentCardinal === Cardinal.West ? Cardinal.North : currentCardinal + 1;
  }
}


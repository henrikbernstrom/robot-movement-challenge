import { Robot, executeCommand } from '../src/robot';
import { Cardinal, CommandName } from '../src/commands';
import { Shape, squareRoom, circularRoom } from '../src/room';

let squareRobot: Robot = {
  position: { x: 3, y: 2 },
  cardinal: Cardinal.East, 
};

let circularRobot: Robot = {
  position: { x: 3, y: -4 },
  cardinal: Cardinal.South, 
};

describe('Robot', () => {
  test('square room then the command name Forward should result in 4 2 E', () => {
    const result = executeCommand(squareRobot, squareRoom, CommandName.Forward);
    expect(result).toHaveProperty('position', { x: 4, y: 2 });
    expect(result).toHaveProperty('cardinal', Cardinal.East);
  });

  test('square room then the command name Left should result in 4 2 N', () => {
    const result = executeCommand(squareRobot, squareRoom, CommandName.Left);
    expect(result).toHaveProperty('position', { x: 4, y: 2 });
    expect(result).toHaveProperty('cardinal', Cardinal.North);
  });

  test('circular room then the command name Forward should result in 4 2 E', () => {
    const result = executeCommand(circularRobot, circularRoom, CommandName.Forward);
    expect(result).toHaveProperty('position', { x: 3, y: -3 });
    expect(result).toHaveProperty('cardinal', Cardinal.South);
  });
});
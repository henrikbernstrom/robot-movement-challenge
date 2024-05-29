import { executeCommands } from '../src/app';
import { Robot } from '../src/robot';
import { Cardinal } from '../src/commands';
import { Shape } from '../src/room';

let squareRobot: Robot = {
  position: { x: 1, y: 2 },
  cardinal: Cardinal.North, 
};

let circularRobot: Robot = {
  position: { x: 0, y: 0 },
  cardinal: Cardinal.North, 
};

describe('Orchestrator', () => {
  test('square room, swedish language then the string HGHGGHGHG should result in 1 3 N', () => {
    const result = executeCommands(squareRobot, 'HGHGGHGHG', 'sv', Shape.Square);
    expect(result).toHaveProperty('position', { x: 1, y: 3 });
    expect(result).toHaveProperty('cardinal', Cardinal.North);
  });

  test('square room, swedish language then the string HGHGGHGHGGGGGGG should result in 1 3 N', () => {
    const result = executeCommands(squareRobot, 'HGHGGHGHGGGGGGG', 'sv', Shape.Square);
    expect(result).toHaveProperty('position', { x: 1, y: 1 });
    expect(result).toHaveProperty('cardinal', Cardinal.North);
  });

  test('circular room, english language then the string RRFLFFLRF should result in 3 1 E', () => {
    const result = executeCommands(circularRobot, 'RRFLFFLRF', 'en', Shape.Circle);
    expect(result).toHaveProperty('position', { x: 3, y: 1 });
    expect(result).toHaveProperty('cardinal', Cardinal.East);
  });
});
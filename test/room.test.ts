import { 
  squareRoom,
  circularRoom,
  getNextPosition,
} from '../src/room';

import {
  Cardinal,
} from '../src/commands'

describe('Room', () => {
  test('squareRoom.isValidPosition should return true for valid positions', () => {
    expect(squareRoom.isValidPosition({ x: 2, y: 2 })).toBe(true);
  });

  test('squareRoom.isValidPosition should return false for positions outside of the X-axis', () => {
    expect(squareRoom.isValidPosition({ x: 6, y: 2 })).toBe(false);
  });

  test('squareRoom.isValidPosition should return false for positions outside of the Y-axis', () => {
    expect(squareRoom.isValidPosition({ x: 5, y: 12 })).toBe(false);
  });

  test('circularRoom.isValidPosition should return true for the center of the circle', () => {
    expect(circularRoom.isValidPosition({ x: 0, y: 0 })).toBe(true);
  });

  test('circularRoom.isValidPosition should return false for positions outside the circle on the X-axis', () => {
    expect(circularRoom.isValidPosition({ x: 11, y: 10 })).toBe(false);
  });

  test('circularRoom.isValidPosition should return false for positions outside the circle on the Y-axis', () => {
    expect(circularRoom.isValidPosition({ x: 0, y: 11 })).toBe(false);
  });

  test('circularRoom.isValidPosition should return false for positions outside the circle', () => {
    expect(circularRoom.isValidPosition({ x: 5, y: 9 })).toBe(false);
  });

  test('circularRoom.isValidPosition should return false for positions outside the circle', () => {
    expect(circularRoom.isValidPosition({ x: 7, y: 8 })).toBe(false);
  });

  test('circularRoom.isValidPosition should return true for negative positions inside the circle', () => {
    expect(circularRoom.isValidPosition({ x: -2, y: -8 })).toBe(true);
  });

  test('circularRoom.isValidPosition should return true for negative positions inside the circle', () => {
    expect(circularRoom.isValidPosition({ x: -4, y: 8 })).toBe(true);
  });

  test('getNextPosition should return { x: 2, y: 2 } input position of { x: 2, y: 1 } and Cardinal.North', () => {
    expect(getNextPosition({ x: 2, y: 1 }, Cardinal.North )).toEqual({ x: 2, y: 0 });
  });
});
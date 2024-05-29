import { Cardinal, Position } from './commands';

export const enum Shape { Square, Circle };

export interface Room<T extends Shape> {
  shape: T;
  anchorPoint: Position;
  size: number;
  getNextPosition(position: Position, Cardinal: Cardinal): Position;
  isValidPosition(position: Position): boolean;
};

export const squareRoom: Room<Shape.Square> = {
  shape: Shape.Square,
  anchorPoint: { x: 1, y: 1 },
  size: 5,
  getNextPosition: (position: Position, cardinal: Cardinal) => getNextPosition(position, cardinal),
  isValidPosition: (position: Position) => isSquarePositionValid(position, squareRoom),
};

export const circularRoom: Room<Shape.Circle> = {
  shape: Shape.Circle,
  anchorPoint: { x: 0, y: 0 },
  size: 10,
  getNextPosition: (position: Position, cardinal: Cardinal) => getNextPosition(position, cardinal),
  isValidPosition: (position: Position) => isCirclePositionValid(position, circularRoom),
};

const isSquarePositionValid = (position: Position, room: Room<Shape.Square>) => {
  const { x: minX, y: minY } = room.anchorPoint;
  const maxX = minX + room.size - 1;
  const maxY = minY + room.size - 1;

  return (
    position.x >= minX &&
    position.x <= maxX &&
    position.y >= minY &&
    position.y <= maxY
  );
};

const isCirclePositionValid = (position: Position, room: Room<Shape.Circle>) => {
  const center = { x: room.anchorPoint.x, y: room.anchorPoint.y };

  const distanceFromCenter = Math.sqrt(Math.pow(position.x - center.x, 2) + Math.pow(position.y - center.y, 2));
  return distanceFromCenter <= room.size;
};

export const getNextPosition = (position: Position, cardinal: Cardinal): Position => {
  switch (cardinal) {
    case Cardinal.North:
      return { x: position.x, y: position.y - 1 };
    case Cardinal.East:
      return { x: position.x + 1, y: position.y };
    case Cardinal.South:
      return { x: position.x, y: position.y + 1 };
    case Cardinal.West:
      return { x: position.x - 1, y: position.y };
  }
};

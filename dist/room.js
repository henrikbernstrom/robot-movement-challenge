;
;
export var squareRoom = {
    shape: 0 /* Shape.Square */,
    anchorPoint: { x: 1, y: 1 },
    size: 5,
    isValidPosition: function (position) { return isSquarePositionValid(position, squareRoom); },
    getNextPosition: function (position, cardinal) { return getNextPosition(position, cardinal); },
};
export var circularRoom = {
    shape: 1 /* Shape.Circle */,
    anchorPoint: { x: 0, y: 0 },
    size: 10,
    isValidPosition: function (position) { return isCirclePositionValid(position, circularRoom); },
    getNextPosition: function (position, cardinal) { return getNextPosition(position, cardinal); },
};
var isSquarePositionValid = function (position, room) {
    var _a = room.anchorPoint, minX = _a.x, minY = _a.y;
    var maxX = minX + room.size - 1;
    var maxY = minY + room.size - 1;
    return (position.x >= minX &&
        position.x <= maxX &&
        position.y >= minY &&
        position.y <= maxY);
};
var isCirclePositionValid = function (position, room) {
    var center = { x: room.anchorPoint.x, y: room.anchorPoint.y };
    var distanceFromCenter = Math.sqrt(Math.pow(position.x - center.x, 2) + Math.pow(position.y - center.y, 2));
    return distanceFromCenter <= room.size;
};
export var getNextPosition = function (position, cardinal) {
    switch (cardinal) {
        case 0 /* Cardinal.North */:
            return { x: position.x, y: position.y - 1 };
        case 1 /* Cardinal.East */:
            return { x: position.x + 1, y: position.y };
        case 2 /* Cardinal.South */:
            return { x: position.x, y: position.y + 1 };
        case 3 /* Cardinal.West */:
            return { x: position.x - 1, y: position.y };
    }
};
//# sourceMappingURL=room.js.map
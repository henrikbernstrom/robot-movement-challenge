var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getNextPosition, } from './room';
export var executeCommand = function (robot, room, commandName) {
    return commandName === 0 /* CommandName.Forward */
        ? move(robot, room)
        : turn(robot, commandName);
};
var move = function (robot, room) {
    room.isValidPosition(getNextPosition(robot.position, robot.cardinal))
        ? robot.position = getNextPosition(robot.position, robot.cardinal)
        : console.log('Invalid position!');
    return robot;
};
var turn = function (robot, commandName) {
    return __assign(__assign({}, robot), { cardinal: getNewCardinal(robot.cardinal, commandName) });
};
var getNewCardinal = function (currentCardinal, commandName) {
    if (commandName === 1 /* CommandName.Left */) {
        return currentCardinal === 0 /* Cardinal.North */ ? 3 /* Cardinal.West */ : currentCardinal - 1;
    }
    else {
        return currentCardinal === 3 /* Cardinal.West */ ? 0 /* Cardinal.North */ : currentCardinal + 1;
    }
};
//# sourceMappingURL=robot.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commands.ts":
/*!*************************!*\
  !*** ./src/commands.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCardinalName: () => (/* binding */ getCardinalName),
/* harmony export */   getCommandName: () => (/* binding */ getCommandName)
/* harmony export */ });
;
;
// Define a function to get a command
var getCommandName = function (commandLetter, language) {
    return CommandTranslations[language][commandLetter === null || commandLetter === void 0 ? void 0 : commandLetter.toUpperCase()];
};
// Define a type for command translations
var CommandTranslations = {
    'en': {
        'F': 0 /* CommandName.Forward */,
        'L': 1 /* CommandName.Left */,
        'R': 2 /* CommandName.Right */
    },
    'sv': {
        'G': 0 /* CommandName.Forward */,
        'V': 1 /* CommandName.Left */,
        'H': 2 /* CommandName.Right */
    }
};
// Define a function to get a command
var getCardinalName = function (cardinal, language) {
    return CardinalTranslations[language][cardinal];
};
// Define a type for command translations
var CardinalTranslations = {
    'en': {
        0: 'North',
        1: 'East',
        2: 'South',
        3: 'West'
    },
    'sv': {
        0: 'Norr',
        1: 'Öst',
        2: 'Syd',
        3: 'Väst'
    }
};


/***/ }),

/***/ "./src/robot.ts":
/*!**********************!*\
  !*** ./src/robot.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeCommand: () => (/* binding */ executeCommand)
/* harmony export */ });
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room */ "./src/room.ts");
var __assign = (undefined && undefined.__assign) || function () {
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

var executeCommand = function (robot, room, commandName) {
    return commandName === 0 /* CommandName.Forward */
        ? move(robot, room)
        : turn(robot, commandName);
};
var move = function (robot, room) {
    room.isValidPosition((0,_room__WEBPACK_IMPORTED_MODULE_0__.getNextPosition)(robot.position, robot.cardinal))
        ? robot.position = (0,_room__WEBPACK_IMPORTED_MODULE_0__.getNextPosition)(robot.position, robot.cardinal)
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


/***/ }),

/***/ "./src/room.ts":
/*!*********************!*\
  !*** ./src/room.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circularRoom: () => (/* binding */ circularRoom),
/* harmony export */   getNextPosition: () => (/* binding */ getNextPosition),
/* harmony export */   squareRoom: () => (/* binding */ squareRoom)
/* harmony export */ });
;
;
var squareRoom = {
    shape: 0 /* Shape.Square */,
    anchorPoint: { x: 1, y: 1 },
    size: 5,
    isValidPosition: function (position) { return isSquarePositionValid(position, squareRoom); },
    getNextPosition: function (position, cardinal) { return getNextPosition(position, cardinal); },
};
var circularRoom = {
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
var getNextPosition = function (position, cardinal) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeCommands: () => (/* binding */ executeCommands)
/* harmony export */ });
/* harmony import */ var _robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robot */ "./src/robot.ts");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room */ "./src/room.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands */ "./src/commands.ts");



var executeCommands = function (robot, commandString, language, shape) {
    var room = shape === 0 /* Shape.Square */ ? _room__WEBPACK_IMPORTED_MODULE_1__.squareRoom : _room__WEBPACK_IMPORTED_MODULE_1__.circularRoom;
    var delay = 0;
    for (var _i = 0, _a = commandString.split(''); _i < _a.length; _i++) {
        var command = _a[_i];
        (function (command, delay) {
            setTimeout(function () {
                robot = (0,_robot__WEBPACK_IMPORTED_MODULE_0__.executeCommand)(robot, room, (0,_commands__WEBPACK_IMPORTED_MODULE_2__.getCommandName)(command, language));
                console.log("Current robot data is ".concat(JSON.stringify(robot), "."));
                renderOutput();
            }, delay);
        })(command, delay);
        delay += 1000; // Increase delay for next iteration
    }
    return robot;
};
// Create a mapping object
var ShapeMapping = {
    'Square': 0 /* Shape.Square */,
    'Circle': 1 /* Shape.Circle */
};
var robot;
// Get the elements from the DOM
var languageSelect = document.getElementById('language-select');
var shapeSelect = document.getElementById('shape-select');
var commandsInput = document.getElementById('commands');
var executeButton = document.getElementById('execute');
var resetButton = document.getElementById('reset');
var selectedLanguage = 'en';
var selectedShape = 0 /* Shape.Square */;
// Function to handle robot movement commands
var executeRobotHandler = function () {
    // Get the commands from the input element
    var commands = commandsInput.value;
    // Run the robot movement commands
    robot = executeCommands(robot, commands, selectedLanguage, selectedShape);
    renderOutput();
};
var resetHandler = function () {
    robot = {
        position: { x: 1, y: 1 },
        cardinal: 0 /* Cardinal.North */,
    };
    if (selectedShape === 1 /* Shape.Circle */)
        robot.position = { x: 0, y: 0 };
    console.log(" Robot reset to ".concat(JSON.stringify(robot), "."));
    renderOutput();
};
var renderOutput = function () {
    var outputElement = document.getElementById('output');
    if (outputElement) {
        var cardinalName = (0,_commands__WEBPACK_IMPORTED_MODULE_2__.getCardinalName)(robot.cardinal, selectedLanguage);
        outputElement.textContent = "Robot moved to (".concat(robot.position.x, ", ").concat(robot.position.y, "), facing ").concat(cardinalName);
    }
    else {
        console.log('Output element not found.');
    }
};
// Event listeners
if (executeButton) {
    executeButton.addEventListener('click', executeRobotHandler);
}
if (resetButton) {
    resetButton.addEventListener('click', resetHandler);
}
shapeSelect.addEventListener('change', function (event) {
    selectedShape = ShapeMapping[shapeSelect.value];
    resetHandler();
});
languageSelect.addEventListener('change', function (event) {
    selectedLanguage = languageSelect.value;
    renderOutput();
});
resetHandler();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ib3QtbW92ZW1lbnQtY2hhbGxlbmdlLy4vc3JjL2NvbW1hbmRzLnRzIiwid2VicGFjazovL3JvYm90LW1vdmVtZW50LWNoYWxsZW5nZS8uL3NyYy9yb2JvdC50cyIsIndlYnBhY2s6Ly9yb2JvdC1tb3ZlbWVudC1jaGFsbGVuZ2UvLi9zcmMvcm9vbS50cyIsIndlYnBhY2s6Ly9yb2JvdC1tb3ZlbWVudC1jaGFsbGVuZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9ib3QtbW92ZW1lbnQtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2JvdC1tb3ZlbWVudC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2JvdC1tb3ZlbWVudC1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2JvdC1tb3ZlbWVudC1jaGFsbGVuZ2UvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFBvc2l0aW9uID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG4vLyBEZWZpbmUgYSB0eXBlIGZvciBsYW5ndWFnZXNcbmV4cG9ydCB0eXBlIExhbmd1YWdlID0gJ2VuJyB8ICdzdic7XG5cbmV4cG9ydCBjb25zdCBlbnVtIENhcmRpbmFsIHsgTm9ydGgsIEVhc3QsIFNvdXRoLCBXZXN0IH07XG5leHBvcnQgY29uc3QgZW51bSBDb21tYW5kTmFtZSB7IEZvcndhcmQsIExlZnQsIFJpZ2h0IH07XG5cbmludGVyZmFjZSBDb21tYW5kczxUIGV4dGVuZHMgTGFuZ3VhZ2U+IHtcbiAgZ2V0Q29tbWFuZE5hbWUoY29tbWFuZExldHRlcjogc3RyaW5nLCBsYW5ndWFnZTogVCk6IENvbW1hbmROYW1lO1xufVxuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBnZXQgYSBjb21tYW5kXG5leHBvcnQgY29uc3QgZ2V0Q29tbWFuZE5hbWUgPSA8VCBleHRlbmRzIExhbmd1YWdlPihjb21tYW5kTGV0dGVyOiBzdHJpbmcsIGxhbmd1YWdlOiBUKTogQ29tbWFuZE5hbWUgPT4ge1xuICByZXR1cm4gKENvbW1hbmRUcmFuc2xhdGlvbnNbbGFuZ3VhZ2VdIGFzIHsgW2tleTogc3RyaW5nXTogQ29tbWFuZE5hbWUgfSlbY29tbWFuZExldHRlcj8udG9VcHBlckNhc2UoKV07XG59XG5cbi8vIERlZmluZSBhIHR5cGUgZm9yIGNvbW1hbmQgdHJhbnNsYXRpb25zXG5jb25zdCBDb21tYW5kVHJhbnNsYXRpb25zID0ge1xuICAnZW4nOiB7XG4gICAgJ0YnOiBDb21tYW5kTmFtZS5Gb3J3YXJkLFxuICAgICdMJzogQ29tbWFuZE5hbWUuTGVmdCxcbiAgICAnUic6IENvbW1hbmROYW1lLlJpZ2h0XG4gIH0sXG4gICdzdic6IHtcbiAgICAnRyc6IENvbW1hbmROYW1lLkZvcndhcmQsXG4gICAgJ1YnOiBDb21tYW5kTmFtZS5MZWZ0LFxuICAgICdIJzogQ29tbWFuZE5hbWUuUmlnaHRcbiAgfVxufVxuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBnZXQgYSBjb21tYW5kXG5leHBvcnQgY29uc3QgZ2V0Q2FyZGluYWxOYW1lID0gPFQgZXh0ZW5kcyBMYW5ndWFnZT4oY2FyZGluYWw6IENhcmRpbmFsLCBsYW5ndWFnZTogVCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiAoQ2FyZGluYWxUcmFuc2xhdGlvbnNbbGFuZ3VhZ2VdIGFzIHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0pW2NhcmRpbmFsXTtcbn1cblxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgY29tbWFuZCB0cmFuc2xhdGlvbnNcbmNvbnN0IENhcmRpbmFsVHJhbnNsYXRpb25zID0ge1xuICAnZW4nOiB7XG4gICAgMDogJ05vcnRoJyxcbiAgICAxOiAnRWFzdCcsXG4gICAgMjogJ1NvdXRoJyxcbiAgICAzOiAnV2VzdCdcbiAgfSxcbiAgJ3N2Jzoge1xuICAgIDA6ICdOb3JyJyxcbiAgICAxOiAnw5ZzdCcsXG4gICAgMjogJ1N5ZCcsXG4gICAgMzogJ1bDpHN0J1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDYXJkaW5hbCwgXG4gIFBvc2l0aW9uLCBcbiAgQ29tbWFuZE5hbWUsXG59IGZyb20gJy4vY29tbWFuZHMnO1xuXG5pbXBvcnQgeyBcbiAgUm9vbSxcbiAgU2hhcGUsXG4gIGdldE5leHRQb3NpdGlvbixcbn0gZnJvbSAnLi9yb29tJztcblxuZXhwb3J0IGludGVyZmFjZSBSb2JvdCB7XG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgY2FyZGluYWw6IENhcmRpbmFsO1xufVxuXG5leHBvcnQgY29uc3QgZXhlY3V0ZUNvbW1hbmQgPSAocm9ib3Q6IFJvYm90LCByb29tOiBSb29tPFNoYXBlPiwgY29tbWFuZE5hbWU6IENvbW1hbmROYW1lKTogUm9ib3QgPT4ge1xuICByZXR1cm4gY29tbWFuZE5hbWUgPT09IENvbW1hbmROYW1lLkZvcndhcmQgXG4gID8gbW92ZShyb2JvdCwgcm9vbSlcbiAgOiB0dXJuKHJvYm90LCBjb21tYW5kTmFtZSk7XG59O1xuXG5jb25zdCBtb3ZlID0gKHJvYm90OiBSb2JvdCwgcm9vbTogUm9vbTxTaGFwZT4pOiBSb2JvdCA9PiB7XG4gIHJvb20uaXNWYWxpZFBvc2l0aW9uKGdldE5leHRQb3NpdGlvbihyb2JvdC5wb3NpdGlvbiwgcm9ib3QuY2FyZGluYWwpKVxuICA/IHJvYm90LnBvc2l0aW9uID0gZ2V0TmV4dFBvc2l0aW9uKHJvYm90LnBvc2l0aW9uLCByb2JvdC5jYXJkaW5hbClcbiAgOiBjb25zb2xlLmxvZygnSW52YWxpZCBwb3NpdGlvbiEnKTtcblxuICByZXR1cm4gcm9ib3Q7XG59XG5cbmNvbnN0IHR1cm4gPSAocm9ib3Q6IFJvYm90LCBjb21tYW5kTmFtZTogQ29tbWFuZE5hbWUpOiBSb2JvdCA9PiB7XG4gIHJldHVybiB7IC4uLnJvYm90LCBjYXJkaW5hbDogZ2V0TmV3Q2FyZGluYWwocm9ib3QuY2FyZGluYWwsIGNvbW1hbmROYW1lKSB9O1xufVxuXG5jb25zdCBnZXROZXdDYXJkaW5hbCA9IChjdXJyZW50Q2FyZGluYWw6IENhcmRpbmFsLCBjb21tYW5kTmFtZTogQ29tbWFuZE5hbWUpOiBDYXJkaW5hbCA9PiB7XG4gIGlmIChjb21tYW5kTmFtZSA9PT0gQ29tbWFuZE5hbWUuTGVmdCkge1xuICAgIHJldHVybiBjdXJyZW50Q2FyZGluYWwgPT09IENhcmRpbmFsLk5vcnRoID8gQ2FyZGluYWwuV2VzdCA6IGN1cnJlbnRDYXJkaW5hbCAtIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGN1cnJlbnRDYXJkaW5hbCA9PT0gQ2FyZGluYWwuV2VzdCA/IENhcmRpbmFsLk5vcnRoIDogY3VycmVudENhcmRpbmFsICsgMTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDYXJkaW5hbCwgUG9zaXRpb24gfSBmcm9tICcuL2NvbW1hbmRzJztcblxuZXhwb3J0IGNvbnN0IGVudW0gU2hhcGUgeyBTcXVhcmUsIENpcmNsZSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb208VCBleHRlbmRzIFNoYXBlPiB7XG4gIHNoYXBlOiBUO1xuICBhbmNob3JQb2ludDogUG9zaXRpb247XG4gIHNpemU6IG51bWJlcjtcbiAgaXNWYWxpZFBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IGJvb2xlYW47XG4gIGdldE5leHRQb3NpdGlvbihwb3NpdGlvbjogUG9zaXRpb24sIENhcmRpbmFsOiBDYXJkaW5hbCk6IFBvc2l0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IHNxdWFyZVJvb206IFJvb208U2hhcGUuU3F1YXJlPiA9IHtcbiAgc2hhcGU6IFNoYXBlLlNxdWFyZSxcbiAgYW5jaG9yUG9pbnQ6IHsgeDogMSwgeTogMSB9LFxuICBzaXplOiA1LFxuICBpc1ZhbGlkUG9zaXRpb246IChwb3NpdGlvbjogUG9zaXRpb24pID0+IGlzU3F1YXJlUG9zaXRpb25WYWxpZChwb3NpdGlvbiwgc3F1YXJlUm9vbSksXG4gIGdldE5leHRQb3NpdGlvbjogKHBvc2l0aW9uOiBQb3NpdGlvbiwgY2FyZGluYWw6IENhcmRpbmFsKSA9PiBnZXROZXh0UG9zaXRpb24ocG9zaXRpb24sIGNhcmRpbmFsKSxcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhclJvb206IFJvb208U2hhcGUuQ2lyY2xlPiA9IHtcbiAgc2hhcGU6IFNoYXBlLkNpcmNsZSxcbiAgYW5jaG9yUG9pbnQ6IHsgeDogMCwgeTogMCB9LFxuICBzaXplOiAxMCxcbiAgaXNWYWxpZFBvc2l0aW9uOiAocG9zaXRpb246IFBvc2l0aW9uKSA9PiBpc0NpcmNsZVBvc2l0aW9uVmFsaWQocG9zaXRpb24sIGNpcmN1bGFyUm9vbSksXG4gIGdldE5leHRQb3NpdGlvbjogKHBvc2l0aW9uOiBQb3NpdGlvbiwgY2FyZGluYWw6IENhcmRpbmFsKSA9PiBnZXROZXh0UG9zaXRpb24ocG9zaXRpb24sIGNhcmRpbmFsKSxcbn07XG5cbmNvbnN0IGlzU3F1YXJlUG9zaXRpb25WYWxpZCA9IChwb3NpdGlvbjogUG9zaXRpb24sIHJvb206IFJvb208U2hhcGUuU3F1YXJlPikgPT4ge1xuICBjb25zdCB7IHg6IG1pblgsIHk6IG1pblkgfSA9IHJvb20uYW5jaG9yUG9pbnQ7XG4gIGNvbnN0IG1heFggPSBtaW5YICsgcm9vbS5zaXplIC0gMTtcbiAgY29uc3QgbWF4WSA9IG1pblkgKyByb29tLnNpemUgLSAxO1xuXG4gIHJldHVybiAoXG4gICAgcG9zaXRpb24ueCA+PSBtaW5YICYmXG4gICAgcG9zaXRpb24ueCA8PSBtYXhYICYmXG4gICAgcG9zaXRpb24ueSA+PSBtaW5ZICYmXG4gICAgcG9zaXRpb24ueSA8PSBtYXhZXG4gICk7XG59O1xuXG5jb25zdCBpc0NpcmNsZVBvc2l0aW9uVmFsaWQgPSAocG9zaXRpb246IFBvc2l0aW9uLCByb29tOiBSb29tPFNoYXBlLkNpcmNsZT4pID0+IHtcbiAgY29uc3QgY2VudGVyID0geyB4OiByb29tLmFuY2hvclBvaW50LngsIHk6IHJvb20uYW5jaG9yUG9pbnQueSB9O1xuXG4gIGNvbnN0IGRpc3RhbmNlRnJvbUNlbnRlciA9IE1hdGguc3FydChNYXRoLnBvdyhwb3NpdGlvbi54IC0gY2VudGVyLngsIDIpICsgTWF0aC5wb3cocG9zaXRpb24ueSAtIGNlbnRlci55LCAyKSk7XG4gIHJldHVybiBkaXN0YW5jZUZyb21DZW50ZXIgPD0gcm9vbS5zaXplO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRQb3NpdGlvbiA9IChwb3NpdGlvbjogUG9zaXRpb24sIGNhcmRpbmFsOiBDYXJkaW5hbCkgPT4ge1xuICBzd2l0Y2ggKGNhcmRpbmFsKSB7XG4gICAgY2FzZSBDYXJkaW5hbC5Ob3J0aDpcbiAgICAgIHJldHVybiB7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgLSAxIH07XG4gICAgY2FzZSBDYXJkaW5hbC5FYXN0OlxuICAgICAgcmV0dXJuIHsgeDogcG9zaXRpb24ueCArIDEsIHk6IHBvc2l0aW9uLnkgfTtcbiAgICBjYXNlIENhcmRpbmFsLlNvdXRoOlxuICAgICAgcmV0dXJuIHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSArIDEgfTtcbiAgICBjYXNlIENhcmRpbmFsLldlc3Q6XG4gICAgICByZXR1cm4geyB4OiBwb3NpdGlvbi54IC0gMSwgeTogcG9zaXRpb24ueSB9O1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBSb2JvdCwgZXhlY3V0ZUNvbW1hbmQgfSBmcm9tICcuL3JvYm90JztcbmltcG9ydCB7IFNoYXBlLCBzcXVhcmVSb29tLCBjaXJjdWxhclJvb20gfSBmcm9tICcuL3Jvb20nO1xuaW1wb3J0IHsgQ2FyZGluYWwsIExhbmd1YWdlLCBnZXRDb21tYW5kTmFtZSwgZ2V0Q2FyZGluYWxOYW1lIH0gZnJvbSAnLi9jb21tYW5kcyc7XG5cbmV4cG9ydCBjb25zdCBleGVjdXRlQ29tbWFuZHMgPSAocm9ib3Q6IFJvYm90LCBjb21tYW5kU3RyaW5nOiBzdHJpbmcsIGxhbmd1YWdlOiBMYW5ndWFnZSwgc2hhcGU6IFNoYXBlKTogUm9ib3QgPT4ge1xuICBjb25zdCByb29tID0gc2hhcGUgPT09IFNoYXBlLlNxdWFyZSA/IHNxdWFyZVJvb20gOiBjaXJjdWxhclJvb207XG5cbmxldCBkZWxheSA9IDA7XG5mb3IgKGNvbnN0IGNvbW1hbmQgb2YgY29tbWFuZFN0cmluZy5zcGxpdCgnJykpIHtcbiAgICAoKGNvbW1hbmQsIGRlbGF5KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcm9ib3QgPSBleGVjdXRlQ29tbWFuZChyb2JvdCwgcm9vbSwgZ2V0Q29tbWFuZE5hbWUoY29tbWFuZCwgbGFuZ3VhZ2UpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHJvYm90IGRhdGEgaXMgJHtKU09OLnN0cmluZ2lmeShyb2JvdCl9LmApO1xuICAgICAgICAgICAgcmVuZGVyT3V0cHV0KCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9KShjb21tYW5kLCBkZWxheSk7XG4gICAgZGVsYXkgKz0gMTAwMDsgLy8gSW5jcmVhc2UgZGVsYXkgZm9yIG5leHQgaXRlcmF0aW9uXG4gIH1cblxuICByZXR1cm4gcm9ib3Q7XG59XG5cbi8vIENyZWF0ZSBhIG1hcHBpbmcgb2JqZWN0XG5jb25zdCBTaGFwZU1hcHBpbmcgPSB7XG4gICdTcXVhcmUnOiBTaGFwZS5TcXVhcmUsXG4gICdDaXJjbGUnOiBTaGFwZS5DaXJjbGVcbn07XG5cbmxldCByb2JvdDogUm9ib3Q7XG5cbi8vIEdldCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG5jb25zdCBsYW5ndWFnZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5ndWFnZS1zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbmNvbnN0IHNoYXBlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXBlLXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuY29uc3QgY29tbWFuZHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYW5kcycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBleGVjdXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4ZWN1dGUnKTtcbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG5cbmxldCBzZWxlY3RlZExhbmd1YWdlOiBMYW5ndWFnZSA9ICdlbic7XG5sZXQgc2VsZWN0ZWRTaGFwZTogU2hhcGUgPSBTaGFwZS5TcXVhcmU7XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSByb2JvdCBtb3ZlbWVudCBjb21tYW5kc1xuY29uc3QgZXhlY3V0ZVJvYm90SGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgLy8gR2V0IHRoZSBjb21tYW5kcyBmcm9tIHRoZSBpbnB1dCBlbGVtZW50XG4gIGNvbnN0IGNvbW1hbmRzOiBzdHJpbmcgPSBjb21tYW5kc0lucHV0LnZhbHVlO1xuXG4gIC8vIFJ1biB0aGUgcm9ib3QgbW92ZW1lbnQgY29tbWFuZHNcbiAgcm9ib3QgPSBleGVjdXRlQ29tbWFuZHMocm9ib3QsIGNvbW1hbmRzLCBzZWxlY3RlZExhbmd1YWdlLCBzZWxlY3RlZFNoYXBlKTtcbiAgcmVuZGVyT3V0cHV0KCk7XG59O1xuXG5jb25zdCByZXNldEhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG4gIHJvYm90ID0ge1xuICAgIHBvc2l0aW9uOiB7IHg6IDEsIHk6IDEgfSxcbiAgICBjYXJkaW5hbDogQ2FyZGluYWwuTm9ydGgsIFxuICB9O1xuXG4gIGlmIChzZWxlY3RlZFNoYXBlID09PSBTaGFwZS5DaXJjbGUpIHJvYm90LnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc29sZS5sb2coYCBSb2JvdCByZXNldCB0byAke0pTT04uc3RyaW5naWZ5KHJvYm90KX0uYCk7XG4gIHJlbmRlck91dHB1dCgpO1xufTtcblxuY29uc3QgcmVuZGVyT3V0cHV0ID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBvdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpO1xuICBpZiAob3V0cHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGNhcmRpbmFsTmFtZSA9IGdldENhcmRpbmFsTmFtZShyb2JvdC5jYXJkaW5hbCwgc2VsZWN0ZWRMYW5ndWFnZSk7XG4gICAgb3V0cHV0RWxlbWVudC50ZXh0Q29udGVudCA9IGBSb2JvdCBtb3ZlZCB0byAoJHtyb2JvdC5wb3NpdGlvbi54fSwgJHtyb2JvdC5wb3NpdGlvbi55fSksIGZhY2luZyAke2NhcmRpbmFsTmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdPdXRwdXQgZWxlbWVudCBub3QgZm91bmQuJyk7XG4gIH1cbn1cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5pZiAoZXhlY3V0ZUJ1dHRvbikge1xuICBleGVjdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhlY3V0ZVJvYm90SGFuZGxlcik7XG59XG5cbmlmIChyZXNldEJ1dHRvbikge1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0SGFuZGxlcik7XG59XG5cbnNoYXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICBzZWxlY3RlZFNoYXBlID0gU2hhcGVNYXBwaW5nW3NoYXBlU2VsZWN0LnZhbHVlIGFzIGtleW9mIHR5cGVvZiBTaGFwZU1hcHBpbmddO1xuICByZXNldEhhbmRsZXIoKTtcbn0pO1xuXG5sYW5ndWFnZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlU2VsZWN0LnZhbHVlIGFzIExhbmd1YWdlO1xuICByZW5kZXJPdXRwdXQoKTtcbn0pO1xuXG5yZXNldEhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
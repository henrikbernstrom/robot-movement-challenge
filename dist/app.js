import { executeCommand } from './robot';
import { squareRoom, circularRoom } from './room';
import { getCommandName } from './commands';
export var executeCommands = function (robot, commandString, language, shape) {
    var room = shape === 0 /* Shape.Square */ ? squareRoom : circularRoom;
    for (var _i = 0, _a = commandString.split(''); _i < _a.length; _i++) {
        var command = _a[_i];
        robot = executeCommand(robot, room, getCommandName(command, language));
        console.log("Current robot data is ".concat(JSON.stringify(robot), "."));
    }
    return robot;
};
// Create a mapping object
var ShapeMapping = {
    'Square': 0 /* Shape.Square */,
    'Circle': 1 /* Shape.Circle */
};
var robot = {
    position: { x: 0, y: 0 },
    cardinal: 0 /* Cardinal.North */,
};
// Function to handle robot movement commands
var executeRobotHandler = function () {
    var _a, _b;
    // Get the selected language from the select element
    var languageSelect = document.getElementById('language-select');
    var selectedLanguage = languageSelect.value;
    // Get the selected shape from the select element
    var shapeSelect = document.getElementById('shape-select');
    var commandsInput = document.getElementById('commands');
    var commands = commandsInput ? (_b = (_a = commandsInput.textContent) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : '' : '';
    // Run the robot movement commands
    robot = executeCommands(robot, commands, selectedLanguage, ShapeMapping[shapeSelect.value]);
    var outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.textContent = "Robot moved to (".concat(robot.position.x, ", ").concat(robot.position.y, "), facing ").concat(robot.cardinal);
    }
    else {
        console.log('Output element not found.');
    }
};
// Event listener for "Move Robot" button
var executeButton = document.getElementById('execute');
if (executeButton) {
    executeButton.addEventListener('click', executeRobotHandler);
}
//# sourceMappingURL=app.js.map
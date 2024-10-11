import { Robot, executeCommand } from './robot';
import { Shape, squareRoom, circularRoom } from './room';
import { Cardinal, Language, getCommandName, getCardinalName } from './commands';

export const executeCommands = (robot: Robot, commandString: string, language: Language, shape: Shape): Robot => {
  const room = shape === Shape.Square ? squareRoom : circularRoom;

  for (const command of commandString.split('')) {
    robot = executeCommand(robot, room, getCommandName(command, language));
    console.log(`Current robot data is ${JSON.stringify(robot)}.`);
  }

  return robot;
}

// Create a mapping object
const ShapeMapping = {
  'Square': Shape.Square,
  'Circle': Shape.Circle
};

let robot: Robot;

// Get the elements from the DOM
const languageSelect = document.getElementById('language-select') as HTMLSelectElement;
const shapeSelect = document.getElementById('shape-select') as HTMLSelectElement;
const commandsInput = document.getElementById('commands') as HTMLInputElement;
const executeButton = document.getElementById('execute');
const resetButton = document.getElementById('reset');

let selectedLanguage: Language = 'en';
let selectedShape: Shape = Shape.Square;

// Function to handle robot movement commands
const executeRobotHandler = (): void => {
  // Get the commands from the input element
  const commands: string = commandsInput.value;

  // Run the robot movement commands
  robot = executeCommands(robot, commands, selectedLanguage, selectedShape);
  renderOutput();
};

const resetHandler = (): void => {
  robot = {
    position: { x: 1, y: 1 },
    cardinal: Cardinal.North, 
  };

  if (selectedShape === Shape.Circle) robot.position = { x: 0, y: 0 };

  if (commandsInput) {
    commandsInput.value = '';
  }

  console.log(` Robot reset to ${JSON.stringify(robot)}.`);
  renderOutput();
};

const renderOutput = (): void => {
  const outputElement = document.getElementById('output');
  if (outputElement) {
    const cardinalName = getCardinalName(robot.cardinal, selectedLanguage);
    outputElement.textContent = `Robot moved to (${robot.position.x}, ${robot.position.y}), facing ${cardinalName}`;
  } else {
    console.log('Output element not found.');
  }
}

// Event listeners
if (executeButton) {
  executeButton.addEventListener('click', executeRobotHandler);
}

if (resetButton) {
  resetButton.addEventListener('click', resetHandler);
}

if (shapeSelect) {
  shapeSelect.addEventListener('change', (event) => {
    selectedShape = ShapeMapping[shapeSelect.value as keyof typeof ShapeMapping];
    resetHandler();
  });
}

if (languageSelect) {
  languageSelect.addEventListener('change', (event) => {
    selectedLanguage = languageSelect.value as Language;
    renderOutput();
  });
}

resetHandler();

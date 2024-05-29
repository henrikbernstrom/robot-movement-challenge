;
;
// Define a function to get a command
export var getCommandName = function (commandLetter, language) {
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
//# sourceMappingURL=commands.js.map
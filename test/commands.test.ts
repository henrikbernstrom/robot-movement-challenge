import { 
  getCommandName, 
  CommandName
} from '../src/commands';

describe('Command', () => {
  test('getCommand should return CommandName.Forward when calling it with "f"', () => {
    expect(getCommandName('f', 'en')).toBe(CommandName.Forward);
  });

  test('getCommand should return CommandName.Left when calling it with "v"', () => {
    expect(getCommandName('l', 'en')).toBe(CommandName.Left);
  });

  test('getCommand should return CommandName.Forward when calling it with "g"', () => {
    expect(getCommandName('g', 'sv')).toBe(CommandName.Forward);
  });
});
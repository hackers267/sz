export function disValidInput(inputs: string[], commands: string[]) {
  return inputs.filter((x) => !commands.includes(x)).reduce((acc) => acc);
}

export function validInput(inputs: string[], commands: string[]) {
  return inputs.every((x) => commands.includes(x));
}

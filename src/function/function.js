export function getRandomHexColor() {
  let genColor = '';
  const regexp = /#[a-f0-9]{6}/gi;
  do {
    genColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (!regexp.test(genColor));
  return genColor;
}

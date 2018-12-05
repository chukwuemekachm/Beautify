import remCalc from "./remCalc";

describe('Test remCalc', () => {
  it('should convert px to rem', () => {
    const result = remCalc(16);
    expect(result).toEqual('1rem');
  });
});

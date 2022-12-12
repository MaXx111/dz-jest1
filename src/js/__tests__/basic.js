import something from "../app.js";

test('should sum', () => {
    const result = something(3);
  
    expect(result).toBe(9);
  });

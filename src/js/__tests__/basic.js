import {howHealthyIsHe, upgrateHowHealthyIsHe} from "../app.js";

test('howHealthy', () => {
    const result = howHealthyIsHe({name: 'Маг', health: 30});
  
    expect(result).toBe('wounded');
  });


  test('howHealthy', () => {
    const result = upgrateHowHealthyIsHe([
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ]);

    const expct = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]
  
    expect(result).toEqual(expct);
  });

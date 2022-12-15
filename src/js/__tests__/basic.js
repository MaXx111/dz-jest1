import { getHealthyStatus, getUpgrateHealthyStatus } from '../app.js';

test.each([
  ['someting', { name: 'Маг', health: 30 }, 'wounded'],
  ['someting', { name: 'Воин', health: 10 }, 'critical'],
  ['someting', { name: 'Чернокнижник', health: 90 }, 'healthy'],
])(
  ('Should get right healthy status for each hero '),
  (something, amount, expected) => {
    const result = getHealthyStatus(amount);
    expect(result).toBe(expected);
  },
);

// test('healthyStatus', () => {
//   const result = getHealthyStatus({ name: 'Маг', health: 30 });

//   expect(result).toBe('wounded');
// });

test('healthyStatusByToEqual', () => {
  const result = getUpgrateHealthyStatus([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expct);
});

test('healthyStatusByToBe', () => {
  const result = getUpgrateHealthyStatus([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toBe(expct);
});

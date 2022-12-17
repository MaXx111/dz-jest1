import { getHealthyStatus } from '../app.js';

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


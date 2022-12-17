export function getHealthyStatus(array) {
  if (array.health < 15) {
    return 'critical';
  } if (array.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}

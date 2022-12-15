export function getHealthyStatus(array) {
  if (array.health < 15) {
    return 'critical';
  } if (array.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}

export function getUpgrateHealthyStatus(array) {
  return array.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });
}

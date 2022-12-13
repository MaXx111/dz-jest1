export function howHealthyIsHe(object) {
    if(object.health < 15) {
        return 'critical';
    } else if (object.health < 50) {
        return 'wounded';
    } else {
        return 'healthy';
    }
};


export function upgrateHowHealthyIsHe(object) {
    return object.sort(function(a,b) {
        if (a.health < b.health) {
            return 1;
        }
        if (a.health > b.health) {
            return -1;
        }

        return 0
    })
};

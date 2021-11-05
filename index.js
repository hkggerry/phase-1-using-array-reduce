const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 0;

function totalSum(accumulator, number){
    return accumulator + number;
}

const total = batteryBatches.reduce(totalSum, totalBatteries)


const numbersInput = document.getElementById('numbers');
const calculateBtn = document.getElementById('calculate-btn');
const errorMessageDiv = document.getElementById('error-message');
const meanLabel = document.getElementById('mean-label');
const varianceLabel = document.getElementById('variance-label');
const stdDevLabel = document.getElementById('std-dev-label');
calculateBtn.addEventListener('click', () => {
  const numbersStr = numbersInput.value.trim();
 
  if (!numbersStr.match(/^(-?\d+(\.\d+)?\s?)*$/)) {
    errorMessageDiv.textContent = 'Invalid input. Please enter only numeric values.';
    return;
  }
  const numbersArr = numbersStr.split(/\s+/).map(Number);
  
  if (numbersArr.length === 0) {
    errorMessageDiv.textContent = 'Please enter a list of numbers.';
    return;
  }
  const mean = calculateMean(numbersArr);
  const variance = calculateVariance(numbersArr, mean);
  const stdDev = calculateStdDev(variance, mean);
  
  meanLabel.textContent = `Mean: ${mean.toFixed(2)}`;
  varianceLabel.textContent = `Variance: ${variance.toFixed(2)}`;
  stdDevLabel.textContent = `Standard Deviation: ${stdDev.toFixed(2)}`;
});
function calculateMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
function calculateVariance(arr, mean) {
  const squaredDiffs = arr.map(x => Math.pow(x - mean, 2));
  return squaredDiffs.reduce((a, b) => a + b, 0) / (arr.length - 1);
}
function calculateStdDev(variance, mean) {
  return Math.sqrt(variance);
}

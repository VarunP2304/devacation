export function formatNumber(value) {
    return value.toLocaleString();
  }
  
  export function formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  
  export function formatPercentage(value) {
    return `${value.toFixed(2)}%`;
  }
  
  export function getApiUrl(endpoint) {
    return `${API_ENDPOINT}/${endpoint}`;
  }
  
  export function handleApiError(error) {
    console.error(error);
    // Handle error logic here
  }
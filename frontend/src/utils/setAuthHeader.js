export const setAuthHeader = function(token){return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Authorization': `Bearer ${token}`
  }}
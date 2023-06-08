const triggerImpression = (url: string) => {
  try {
    fetch(url, { method: 'GET' });
    // Check the response status
  } catch (error) {
    console.log('Error triggering impression:', error);
  }
};

export default triggerImpression;

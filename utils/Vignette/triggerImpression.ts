const triggerImpression = async (url: string) => {
  try {
    const response = await fetch(url, { method: 'GET' });
    // Check the response status
    if (response.ok) {
      console.log('Impression triggered successfully!');
    } else {
      console.log('Failed to trigger impression.');
    }
  } catch (error) {
    console.log('Error triggering impression:', error);
  }
};

export default triggerImpression;

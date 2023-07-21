const getScript = async () => {
  const filePath = './public/adsterra/social_NoAlerts_NoSoftware_NoAdsWithSound.js';

  try {
    const response = await fetch('https://pl20118814.highwaycpmrevenue.com/1e/62/59/1e6259bdc59431e3066ab6dbcfab5747.js', {
      headers: {
        'X-Forwarded-For': 'your ip goes here if u under vpn',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const text = await response.text();

    // Write the response to a file.
    //fs.writeFileSync(filePath, text);

    console.log('Response written to file successfully!');
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

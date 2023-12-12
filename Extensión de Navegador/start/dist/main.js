import axios from '../node_modules/axios';

function setUpUser(apiKey, regionName) {
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('regionName', regionName);
    loading.style.display = 'block';
    errors.textContent = '';
    clearBtn.style.display = 'block';
    //make initial call
    displayCarbonUsage(apiKey, regionName);
    }
    
    import axios from '../node_modules/axios';
    async function displayCarbonUsage(apiKey, region) {
    try {
    await axios
    .get('https://api.co2signal.com/v1/latest', {
    params: {
    countryCode: region,
    },
    headers: {
    'auth-token': apiKey,
    },
    })
    .then((response) => {
    let CO2 =
    Math.floor(response.data.data.carbonIntensity);
    //calculateColor(CO2);
    loading.style.display = 'none';
    form.style.display = 'none';
    myregion.textContent = region;
    usage.textContent =
    Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
    fossilfuel.textContent =
    response.data.data.fossilFuelPercentage.toFixed(2) +
    '% (percentage of fossil fuels used to generate electricity)';
    results.style.display = 'block';
    });
    } catch (error) {
    console.log(error);
    loading.style.display = 'none';
    results.style.display = 'none';
    errors.textContent = 'Sorry, we have no data for the region you have requested.';
    }
    }
    

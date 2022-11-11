const apiKey = 'rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42';

fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=' + apiKey)
    .then(function(resposne) {
        return resposne.json()
    })
    .then(function(data) {
        console.log(data)
    })
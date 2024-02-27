let accessToken = "";

function getURL() {
   console.log("step-3 done execute code");
  const options = {
    method: 'post',
    url: 'https://uat.setu.co/api/v2/payment-links',
    headers: {
      'X-Setu-Product-Instance-ID': '1362076550198986160',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    data: {
        "billerBillID": "29GGGGG1314R9Z6",
              "amount": {
                "currencyCode": "INR",
                "value": 1000000
              },
              "expiryDate": "2024-12-06T12:34:28Z",
              "amountExactness": "EXACT",
              "settlement": {
                "primaryAccount": {
                  "ifsc": "SBIN0021991",
                  "id": "021000021",
                  "name": "temp"
                }
              },
              "validationRules": {
                "sourceAccounts": [
                  {
                    "ifsc": "Testing",
                    "number": "021000099"
                  }
                ]
              }
    }
  };

  axios.request(options).then(function (response) {
    

    // // Extract the shortURL from the response
    const jsonData = response;
    // console.log(jsonData.data.data.name)
    const shortURL = jsonData.data.data.paymentLink.shortURL;
    // console.log('Short URL:', shortURL);
    // Open the link in a new tab
    window.open(shortURL, '_blank');
  }).catch(function (error) {
    console.error(error);
  });
}

function getAccessToken() {
   
  const authOptions = {
    method: 'post',
    url: 'https://uat.setu.co/api/v2/auth/token',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "clientID": "7eb0314d-fe4c-40cb-9525-061a1634de28",
      "secret": "4fc3cec7-9f75-4d7f-9806-600d6274980f"
    }
  };

  axios.request(authOptions).then(function (response) {
    if (response.status === 200 && response.data.success) {
      accessToken = response.data.data.token;
      console.log("got the accessToken!!");
      getURL();
    } else {
      console.error('Error getting access token');
    }
  }).catch(function (error) {
     console.log("step-2 failed");
    console.error(error);
  });
}

function executeCode() {
  console.log("step-1 done execute code");
  getAccessToken();
}




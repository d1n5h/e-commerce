// Initialize the token variable
let accessToken = "";
var axios = require("axios").default;
app.use(cors()))

// Function to get access token
function getAccessToken() {
    const authOptions = {
        method: 'post',
        url: 'http://localhost:3000/api/v2/auth/token', // Use the proxy server URL
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
            makePayment(); // Call the function to initiate payment after getting the access token
        } else {
            console.error('Error getting access token');
        }
    }).catch(function (error) {
        console.error(error);
    });
}

function makePayment() {
    var options = {
        method: 'post',
        url: 'http://localhost:3000/api/v2/payment-links', // Use the proxy server URL
        headers: {
            'X-Setu-Product-Instance-ID': '1362076550198986160',
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        data: {
            // ... your existing data payload
        }
    };

    axios.request(options).then(function (response) {
        if (response.status === 200 && response.data.success) {
            var paymentLink = response.data.data.paymentLink.shortURL;
            window.open(paymentLink, '_blank');
        } else {
            console.error(response.data);
            alert('Error initiating payment. Please check the console for details.');
        }
    }).catch(function (error) {
        console.error(error);
        alert('Error initiating payment. Please check the console for details.');
    });
}

// Call the function to get the access token before making the payment
getAccessToken();

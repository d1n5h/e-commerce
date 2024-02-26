var axios = require("axios").default;

var options = {
  method: 'post',
  url: 'https://uat.setu.co/api/v2/payment-links',
  headers: {
    'X-Setu-Product-Instance-ID': '1362076550198986160',
    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItTWNWaDNSdGdfTmlDbDNoMHU0dmFxOG5uRkl4ckVOMHM3ckdRbVA1OVVrIn0.eyJleHAiOjE3MDg5MzkxMjUsImlhdCI6MTcwODkzNzMyNSwianRpIjoiMmE1NDgxZTctZTZlZS00NzI1LTg5ZGMtZGY4M2IzZWMxYzNkIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnNldHUuY28vYXV0aC9yZWFsbXMvY29sbGVjdCIsInN1YiI6ImYxMjc4NDU1LTA1NWEtNGI4Zi1hMmIzLTZhNjg4NjNkYTczMSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjdlYjAzMTRkLWZlNGMtNDBjYi05NTI1LTA2MWExNjM0ZGUyOCIsInNlc3Npb25fc3RhdGUiOiJhZDg0MWUzNy0zNjgzLTQwNDMtYmQ5Yy04ZmJhMGNjOGUyMWQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwic2NvcGUiOiJlbWFpbCIsImNsaWVudElkIjoiN2ViMDMxNGQtZmU0Yy00MGNiLTk1MjUtMDYxYTE2MzRkZTI4IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImNsaWVudEhvc3QiOiIxMy4yMzIuMjM1LjE5OCIsIlgtU2V0dS1DbGllbnQtSUQiOiI4N2I1NDRlOC02ZjdiLTQwMWYtOGZjYy01NDhhMzRkNGFlNzAiLCJjbGllbnRBZGRyZXNzIjoiMTMuMjMyLjIzNS4xOTgiLCJVc2VyLUlEIjoiZjEyNzg0NTUtMDU1YS00YjhmLWEyYjMtNmE2ODg2M2RhNzMxIn0.WIUz-b2I4Q1tZhewbUbPmtbsYS33dqVXAbLe6dz-wx1toVjrTrK6EUzmvceDIQje2d5meIVVyMlp9GX4bNLCQzA9UBwekWZHCS0GiKel_IKtOYdH4zf-TMtXFIVf5F7X4wdZ3r2o-Nyg0tMWckZ51CMm6rr3qI0jy3LHYuB0mrnA-aCi13NxL4PAAXGjSUSKJ2H_40OEMWHys3BAp2fzPYlhP1tk-zTSi4gsq083scG3l7MP7TNHWztmBIIUkbZ7dWvLKs1nwhv-6K7wND6yKIlEUrO9ZSHFpfMZtl9H8liF7YcQJwQWm6HBHLK3LqrZNeWYc6DPKImr2uk0NnFhhA ',
    'Content-Type': 'application/json'  // Specify JSON content type
  },
  data: {
    "billerBillID": "29GGGGG1314R9Z6",
    "amount": {
      "currencyCode": "INR",
      "value": 5000
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
          "ifsc": "ICICI000123",
          "number": "021000099"
        }
      ]
    }
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

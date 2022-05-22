//parameters
var partnerCode = "MOMO5VLY20220317";
var accessKey = "CVdikSXjCHoojz2Z";
var secretkey = "CtulWb0WensOBJLKhUVI9KdftfX4eBqk";
var requestId = partnerCode + new Date().getTime();
var orderId = requestId;
var orderInfo = "Pay with MoMo";
var redirectUrl = "http://localhost:3000/cart";
var ipnUrl = "https://callback.url/notify";
var amount = "1000";
var requestType = "captureWallet";
var extraData = ""; //pass empty value if your merchant does not have stores

//before sign HMAC SHA256 with format
//accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
var rawSignature =
  "accessKey=" +
  accessKey +
  "&amount=" +
  amount +
  "&extraData=" +
  extraData +
  "&ipnUrl=" +
  ipnUrl +
  "&orderId=" +
  orderId +
  "&orderInfo=" +
  orderInfo +
  "&partnerCode=" +
  partnerCode +
  "&redirectUrl=" +
  redirectUrl +
  "&requestId=" +
  requestId +
  "&requestType=" +
  requestType;
//puts raw signature
// console.log("--------------------RAW SIGNATURE----------------");
// console.log(rawSignature);
//signature
const crypto = require("crypto");
var signature = crypto
  .createHmac("sha256", secretkey)
  .update(rawSignature)
  .digest("hex");
// console.log("--------------------SIGNATURE----------------");
// console.log(signature);

//json object send to MoMo endpoint
const requestBody = JSON.stringify({
  partnerCode: partnerCode,
  accessKey: accessKey,
  requestId: requestId,
  amount: amount,
  orderId: orderId,
  orderInfo: orderInfo,
  redirectUrl: redirectUrl,
  ipnUrl: ipnUrl,
  extraData: extraData,
  requestType: requestType,
  signature: signature,
  lang: "en",
});

//Create the HTTPS objects
const headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
  "Content-Length": Buffer.byteLength(requestBody),
};

module.exports = { requestBody, headers };

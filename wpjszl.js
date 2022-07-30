// let body = $response.body
// console.log(`🚀 -> file: wpjszl.js -> line 2 -> body`, $response)
// // body = JSON.parse(body)

// // console.log('body', body)

// // body = JSON.stringify(body)

// $done(body)

var body = $response.body;
var obj = JSON.parse(body);

obj['result'] = 0;
body = JSON.stringify(obj);

console.log(body);

$done(body);
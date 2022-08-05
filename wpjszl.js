let body = $response.body

$task.fetch({
  // url: 'http://10.11.73.81:4600',
  url: 'http://192.168.50.122:4600',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: body
  })
}).then(res => {
  console.log(`发送完毕${JSON.stringify(res)}`)
}, reason => {
  console.log(`发送失败${reason.error}`)
})
// body = JSON.parse(body)

// console.log('body', body)

// body = JSON.stringify(body)

$done(body)
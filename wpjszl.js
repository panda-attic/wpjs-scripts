let body = $response.body

$task.fetch({
  url: 'http://192.168.50.122:4600',
  method: 'POST',
  body,
}).then(res => {
  console.log(`发送完毕${JSON.stringify(res)}`)
}, reason => {
  console.log(`发送失败${reason.error}`)
})
// body = JSON.parse(body)

// console.log('body', body)

// body = JSON.stringify(body)

$done(body)
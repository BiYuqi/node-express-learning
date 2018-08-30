const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    res.end(`
      <div style="margin: 15px auto;">Current server adress is <span style="font-size: 18px;color: blue">${req.url}</span></div>
      <div style="margin: 15px auto;">Current server Query is <span style="font-size: 18px;color: blue">${JSON.stringify(url.parse(req.url).query)}</span></div>
      <div style="margin: 15px auto;">Current server UserAgent is <span style="font-size: 18px;color: blue">${req.headers['user-agent']}</span></div>
      <div style="margin: 15px auto;">Current server cookie is <span style="font-size: 18px;color: blue">${req.headers.cookie}</span></div>
      <div style="margin: 15px auto;">Current server accept is <span style="font-size: 18px;color: blue">${req.headers.accept}</span></div>
    `)
  }
})
server.listen(8088)
console.log('listenning at 8088')
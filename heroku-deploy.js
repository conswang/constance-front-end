const express = require('express')
const app = express()

app.use(express.static('./dist/personal-website'))

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/personal-website/'})
})

app.listen(process.env.PORT || 8080)
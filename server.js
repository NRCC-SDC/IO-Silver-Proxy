const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/reviews/*', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

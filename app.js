const http = require('http');

const server = http.createServer((req, res) => {
res.write('On my way higher')
	res.end();
});

server.listen(3000);
console.log(`Server started on port 3000`);

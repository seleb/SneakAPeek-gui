// runs the backend + frontend, assuming frontend has already been built

// start the backend
import SneakAPeek from "sneakapeek";
import sneakAPeekConfig from "./sneakapeak.config.json";
SneakAPeek(sneakAPeekConfig);

// start the frontend
import httpServer from "http-server";
import open from "open";
import "sneakapeek";

const options = {
	port: 8080,
	root: "./dist",
	host: "localhost"
};
const url = `http://${options.host}:${options.port}`;
const server = httpServer.createServer(options);

server.listen(options.port, options.host, () => {
	console.log(`Listening on ${url}`);
	open(url);
});

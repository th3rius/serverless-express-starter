import app from "./app";
import http from "http";

const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "localhost";

async function bootstrap() {
  const expressApp = await app("dev");
  const server = http.createServer(expressApp);

  server.listen(PORT, HOST, () => {
    const {address, port} = server.address();
    console.log(`Server is running at http://${address}:${port}! 👾`);
  });
}

bootstrap();

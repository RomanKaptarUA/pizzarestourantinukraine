const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT має бути цілим числом від 1 до 65535.");
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  const requestedPath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = path.resolve(root, requestedPath);
  const relativePath = path.relative(root, filePath);

  if (relativePath.startsWith(`..${path.sep}`) || relativePath === ".." || path.isAbsolute(relativePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    response.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.on("error", (error) => {
      console.error("Не вдалося прочитати файл:", error);
      if (!response.headersSent) {
        response.writeHead(500);
      }
      response.end("Internal Server Error");
    });
    stream.pipe(response);
  });
});

server.on("error", (error) => {
  console.error(`Не вдалося запустити сервер на порту ${port}:`, error.message);
  process.exitCode = 1;
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Сайт працює: http://localhost:${port}`);
  console.log("Щоб зупинити сервер, натисніть Ctrl+C.");
});

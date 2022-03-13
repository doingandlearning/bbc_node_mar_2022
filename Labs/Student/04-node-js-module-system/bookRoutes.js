export function serveBookRoute(url, method, res) {
  switch (method) {
    case "GET":
    case "get":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Here are all the books.\n");
      return;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Sorry. We don't serve this verb yet.\n");
  }
}

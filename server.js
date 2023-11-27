import { createServer } from "http"

const server = createServer((req, res) => {
  console.log("run request ...")
  res.setHeader("Content-type", "text/html")
  res.write("<h3>Hello world!</>")
  res.write("<h2>From Nhi Nguyen</h2>")
  res.end()
})

server.listen(3000, "localhost", () => {
  console.log("Node.JS server is running on port: 3000")
})

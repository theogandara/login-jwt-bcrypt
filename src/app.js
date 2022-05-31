import express from "express"
const app = express()
const port = 3002

app.get("/hello", (req, res) => {
    res.send("Hello World 💚!")
})

app.listen(port, () => {
    console.log(`🔥 server is running in port ${port} 🤟`)
})

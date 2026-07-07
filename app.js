const express = require("express");
const path = require("path");
const fs = require("fs");
const { marked } = require("marked");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.get("/file/:name", (req, res) => {
    const filePath = path.join(__dirname, "data", "files", req.params.name);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }

    const markdown = fs.readFileSync(filePath, "utf8");
    const html = marked.parse(markdown);

    res.send(html);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
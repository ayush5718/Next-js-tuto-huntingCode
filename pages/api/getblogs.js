// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  // fs.readFileSync("blogdata/blogs.json","utf-8")  // this is sync function it will block the code until it reads the file completely
  // reading file asynchronously and fetching data from it reading the system file
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json({ name: JSON.parse(data) });
  });
}

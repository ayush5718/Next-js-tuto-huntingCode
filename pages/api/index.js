// this index.js file gets special treatment in nextjs and is treated as the root file of the project

export default function handler(req, res) {
  res.status(200).json({ name: "this is index file data" });
}

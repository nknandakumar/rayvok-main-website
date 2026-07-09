const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

// Parse env variables manually from .env.local
const envPath = path.join(__dirname, ".env.local");
let projectId = "kpbd4n5p";
let dataset = "production";

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  const matchProj = envContent.match(/NEXT_PUBLIC_SANITY_PROJECT_ID\s*=\s*(.*)/);
  if (matchProj) projectId = matchProj[1].trim();
  const matchDataset = envContent.match(/NEXT_PUBLIC_SANITY_DATASET\s*=\s*(.*)/);
  if (matchDataset) dataset = matchDataset[1].trim();
}

console.log("Project ID:", projectId);
console.log("Dataset:", dataset);

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-06-02",
  useCdn: false,
});

async function run() {
  try {
    const query = `*[_type == "testimonial"] | order(arrangeNumber asc)`;
    const data = await client.fetch(query);
    console.log("Testimonials count:", data.length);
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

run();

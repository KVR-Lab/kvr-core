import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const workspaceRoot = resolve(import.meta.dirname, "..");
const graphPath = resolve(
  workspaceRoot,
  "docs/architecture/project-graph.json",
);

const expectedProjects = ["kvr", "kvr-core", "kvr-web", "kvr-desktop"];
const expectedEdges = [
  ["kvr-desktop", "kvr-web"],
  ["kvr-web", "kvr-core"],
  ["kvr-core", "kvr"],
];

const generated = spawnSync(
  "pnpm",
  ["exec", "nx", "graph", `--file=${graphPath}`],
  { cwd: workspaceRoot, stdio: "inherit", encoding: "utf8" },
);

if (generated.status !== 0) {
  process.exit(generated.status ?? 1);
}

const { graph } = JSON.parse(readFileSync(graphPath, "utf8"));
const nodes = Object.keys(graph.nodes);
const missingProjects = expectedProjects.filter((name) => !nodes.includes(name));

if (missingProjects.length > 0) {
  console.error(`Missing projects: ${missingProjects.join(", ")}`);
  process.exit(1);
}

const extraProjects = nodes.filter((name) => !expectedProjects.includes(name));
if (extraProjects.length > 0) {
  console.error(`Unexpected projects: ${extraProjects.join(", ")}`);
  process.exit(1);
}

const edges = Object.values(graph.dependencies)
  .flat()
  .map((edge) => `${edge.source}->${edge.target}`);

const missingEdges = expectedEdges
  .map(([source, target]) => `${source}->${target}`)
  .filter((edge) => !edges.includes(edge));

if (missingEdges.length > 0) {
  console.error(`Missing edges: ${missingEdges.join(", ")}`);
  process.exit(1);
}

console.log("Nx project graph verified:");
console.log(`  projects: ${expectedProjects.join(", ")}`);
console.log(`  edges: ${expectedEdges.map(([a, b]) => `${a} → ${b}`).join(", ")}`);

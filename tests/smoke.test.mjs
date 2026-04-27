import { expect, test } from "bun:test";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

test("core content directories exist", () => {
  expect(existsSync("src/content/briefs")).toBe(true);
  expect(existsSync("src/content/notes")).toBe(true);
  expect(existsSync("src/content/themes")).toBe(true);
});

test("theme content files exist", () => {
  const themeFiles = walk("src/content/themes").filter((file) =>
    file.endsWith(".md"),
  );
  expect(themeFiles.length).toBeGreaterThan(0);
});

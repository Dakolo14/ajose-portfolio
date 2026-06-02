import fs from "fs";
import path from "path";

const lockPath = path.join(process.cwd(), ".next", "dev", "lock");

try {
  fs.unlinkSync(lockPath);
  console.log("Removed stale Next.js dev lock.");
} catch {
  // No lock file — dev server can start normally.
}

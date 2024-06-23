#!/usr/bin/env node
import { init } from "@/src/commands/init";
import { getPackageInfo } from "./utils/get-package-info";
import { Command } from "commander";

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("rn-ui")
    .description("add components and dependencies to your project")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init);

  program.parse();
}

main();

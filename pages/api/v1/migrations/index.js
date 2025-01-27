import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationOption = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"), // Feito por conta de SOs tratarem caminhos de formas diferentes
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  }

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOption);
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOption,
      dryRun: false,
    })

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }

  return response.status(405).end();
}

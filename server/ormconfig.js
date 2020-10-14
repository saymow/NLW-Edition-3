const environment = process.env.NODE_ENV;

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: 252525,
  database: environment === "test" ? "postgres-happy-test" : "postgres-happy",
  logging: environment !== "test",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};

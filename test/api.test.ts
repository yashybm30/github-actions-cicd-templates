import "reflect-metadata";
import { test } from "vitest";
import { NestFactory } from "@nestjs/core";
import { createRequire } from "node:module";
import request from "supertest";
const require = createRequire(import.meta.url);
const { AppModule } = require("../dist/app");
test("built release serves health and API endpoints", async () => {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.init();
  try {
    await request(app.getHttpServer()).get("/health/ready").expect(200);
    await request(app.getHttpServer()).get("/v1/message").expect(200);
  } finally {
    await app.close();
  }
});

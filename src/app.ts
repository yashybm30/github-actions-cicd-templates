import { Controller, Get, Module } from "@nestjs/common";
@Controller()
class Api {
  @Get("health/live") live() {
    return { status: "alive" };
  }
  @Get("health/ready") ready() {
    return { status: "ready" };
  }
  @Get("v1/message") message() {
    return { message: "A verified release starts with a repeatable build." };
  }
}
@Module({ controllers: [Api] })
export class AppModule {}

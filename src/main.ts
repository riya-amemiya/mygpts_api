import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    origin: process.env.NODE_ENV === "production" ? true : "*",
    methods: ["GET", "POST"],
  });
  const config = new DocumentBuilder()
    .setTitle("MyGPTs API")
    .setDescription("The MyGPTs API is a simple API for managing GPTs.")
    .setVersion("1.0")
    .addServer(
      process.env.RAILWAY_PUBLIC_DOMAIN
        ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
        : "http://localhost:3000",
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, "0.0.0.0");
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Port: ${PORT}`);
  console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();

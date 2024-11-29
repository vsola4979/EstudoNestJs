import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
// import { Logger } from 'nestjs-pino';
// import { SwaggerConfigModule } from '../swagger.module';

let cachedServer;

export const handler = async (event, context) => {
    if (!cachedServer) {
        const nestApp = await NestFactory.create(AppModule, { bufferLogs: true, cors: true });
        // nestApp.useLogger(nestApp.get(Logger));
        nestApp.useGlobalPipes(new ValidationPipe({ transform: true }));
        // SwaggerConfigModule.register(nestApp);

        await nestApp.init();
        cachedServer = serverlessExpress({
            app: nestApp.getHttpAdapter().getInstance(),
        });
    }

    return cachedServer(event, context);
};

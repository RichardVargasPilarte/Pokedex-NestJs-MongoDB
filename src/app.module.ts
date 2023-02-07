import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { MongooseModule } from '@nestjs/mongoose';

import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validations';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PokemonModule,
    SeedModule,
    CommonModule
  ],
})
export class AppModule {}

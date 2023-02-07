import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonService } from './pokemon.service';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { CommonModule } from '../common/common.module';


@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema
      }
    ]),
    CommonModule,
  ],exports:[
    MongooseModule,
  ]
})
export class PokemonModule {}

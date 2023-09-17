import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DataController } from 'src/controllers/data.controller'
import { Data, DataSchema } from 'src/schemas/data.schema'
import { DataService } from 'src/services/data.service'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
  controllers: [DataController],
  providers: [DataService],
})
export class DatasModule {}

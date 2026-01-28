import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilModule } from './profil/profil.module';

@Module({
	imports: [ProfilModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
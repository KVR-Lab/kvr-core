import { Controller, Get, Param, Post } from '@nestjs/common';
import { RuntimeService } from './runtime.service';

@Controller('runtime')
export class RuntimeController {

    constructor(
        private readonly service: RuntimeService
    ) {}

    @Get()
    status() {
        return this.service.status();
    }

    @Get('operations')
    operations() {
        return this.service.operations();
    }

    @Get('operations/:id')
    operation(@Param('id') id: string) {
        return this.service.operation(id);
    }

    @Post('pause')
    pause() {
        return this.service.pause();
    }

    @Post('resume')
    resume() {
        return this.service.resume();
    }

    @Post('cancel')
    cancelCurrent() {
        return this.service.cancel();
    }

    @Post('cancel/:id')
    cancel(@Param('id') id: string) {
        return this.service.cancel(id);
    }

}

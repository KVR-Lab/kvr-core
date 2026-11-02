import { Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
        const operation = this.service.operation(id);

        if (!operation) {
            throw new NotFoundException(`Unknown runtime operation: ${id}`);
        }

        return operation;
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
        const operation = this.service.cancel(id);

        if (!operation) {
            throw new NotFoundException(`Unknown runtime operation: ${id}`);
        }

        return operation;
    }

}

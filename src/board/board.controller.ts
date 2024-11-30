import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Query,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardCreateDto } from './boarddto/req/boardCreateDto';
import { AccessGuard } from '../jwtGuard/access.guard';
import { BoardJoinDto } from './boarddto/req/boardJoin.Dto';

@UseGuards(AccessGuard)
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Post('create')
  async create(@Body() body: BoardCreateDto, @Request() req: Request) {
    return this.boardService.create(body, req);
  }
  @Get('search')
  async search() {
    return this.boardService.search();
  }
  @Get('join')
  async join(@Query() qur: BoardJoinDto, @Request() req: Request) {
    return this.boardService.join(qur, req);
  }
}

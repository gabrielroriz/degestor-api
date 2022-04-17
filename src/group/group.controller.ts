import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './interfaces/group.interface';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() group: Group) {
    this.groupService.create(group);
  }

  @Get()
  async findAll(): Promise<Group[]> {
    return this.groupService.findAll();
  }
}

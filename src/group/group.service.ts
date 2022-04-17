import { Injectable } from '@nestjs/common';
import { Group } from './interfaces/group.interface';

@Injectable()
export class GroupService {
  private readonly groups: Group[] = [];

  create(group: Group) {
    this.groups.push(group);
  }

  findAll(): Group[] {
    return this.groups;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Pipe({
  name: 'slicePaginatorList',
  pure: false
})
export class SlicePaginatorListPipe implements PipeTransform {
  transform<T, P extends MatPaginator>(list: T[] | null, paginator: P): T[] {
    if (!list) {
      return [];
    }
    const start = paginator.pageIndex * paginator.pageSize
    const end = (paginator.pageIndex + 1) * paginator.pageSize;

    return list.slice(start, end);
  }
}

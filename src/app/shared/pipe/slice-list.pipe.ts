import { Pipe, PipeTransform } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ICatImage } from '@shared/interfaces';

@Pipe({
  name: 'sliceList',
  pure: false
})
export class SliceListPipe implements PipeTransform {
  transform(list: ICatImage[] | null, paginator: MatPaginator): ICatImage[] {
    console.log(paginator);
    if (!list) {
      return [];
    }
    const start = paginator.pageIndex * paginator.pageSize
    const end = (paginator.pageIndex + 1) * paginator.pageSize;

    return list.slice(start, end);
  }
}

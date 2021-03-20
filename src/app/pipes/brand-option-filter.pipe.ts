import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandOptionFilter'
})
export class BrandOptionFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

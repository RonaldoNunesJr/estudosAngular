import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})

export class DataBrPipe implements PipeTransform {
  /**
   * Aplica formatação para a data.
   * 
   * @param string data no formato yyyy/mm/dd 
   * @return string data no formato dd/mm/yyyy 
   */
  transform(dataEn: string): string {
    if ( !dataEn ) {
        return '';
    }

    const dataArr = dataEn.split('-');

    if ( dataArr.length !== 3 ) {
      return dataEn;
    }

    return dataArr.reverse().join('/');
  }

}

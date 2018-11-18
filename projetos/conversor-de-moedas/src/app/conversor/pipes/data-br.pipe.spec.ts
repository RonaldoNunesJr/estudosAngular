import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });
});

it('deve formatar a data 2018-11-18 para 18/11/2018', () => {
  const pipe = new DataBrPipe();
  expect(pipe.transform('2018-11-18')).toEqual('18/11/2018');
})

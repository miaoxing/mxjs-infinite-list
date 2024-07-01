import {render} from '@testing-library/react';
import InfiniteList from '..';

describe('InfiniteList', () => {
  test('basic', () => {
    const result = render(<InfiniteList render={() => 'test'}/>);
    expect(result.container).toMatchSnapshot();
  });
});

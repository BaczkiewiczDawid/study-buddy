import { render } from 'test-utils';
import { setupServer } from 'msw/node';
import{ handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search bar', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Renders the component', () => {
        render(<SearchBar />);
    })
})
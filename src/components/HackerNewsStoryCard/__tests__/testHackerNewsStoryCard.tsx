import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import HackerNewsStoryCard from '../';

describe('HackerNewsStoryCard', () => {
    const mockProps = {
        isError: false,
        isLoading: false,
        story: {
            by: 'string',
            descendants: 5,
            id: 4,
            kids: [5, 6, 7],
            score: 34,
            time: 344223123,
            title: 'title text',
            type: 'story',
            url: 'http://www.blah.com',
        },
        retry: () => {},
    };

    it('renders correctly when loading', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStoryCard {...mockProps} isLoading={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with error', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStoryCard {...mockProps} isError={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with story', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStoryCard {...mockProps} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

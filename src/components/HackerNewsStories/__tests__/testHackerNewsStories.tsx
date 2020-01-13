import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import HackerNewsStories, {
    STORIES_PER_PAGE,
    checkForScrollToBottom,
} from '../';
import HackerNewsStoryContainer from 'src/containers/HackerNewsStoryContainer';
import UseScrollPosition from 'src/hooks/UseScrollPosition';

jest.mock('src/hooks/UseScrollPosition');

describe('HackerNewsStoryContainer', () => {
    const mockProps = {
        isError: false,
        isLoading: false,
        storyIds: Array.from(Array(500).keys()),
        retry: () => {},
    };

    beforeEach(() => {
        (UseScrollPosition as jest.Mock<any>).mockClear();
    });

    it('renders correctly when loading', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStories {...mockProps} isLoading={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with error', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStories {...mockProps} isError={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with children', () => {
        const wrapper: ShallowWrapper = shallow(
            <HackerNewsStories {...mockProps} />
        );

        act(() => {
            expect(wrapper.find(HackerNewsStoryContainer)).toHaveLength(
                STORIES_PER_PAGE
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('checks if scroll to bottom correctly', () => {
        expect(checkForScrollToBottom(0, 1000, 100)).toEqual(false);
        expect(checkForScrollToBottom(-500, 1000, 100)).toEqual(false);
        expect(checkForScrollToBottom(-1000, 1000, 100)).toEqual(true);
    });
});

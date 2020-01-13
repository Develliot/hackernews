import React, { useState, useRef, FunctionComponent } from 'react';

import { limitNumberWithinRange } from 'src/utils/NumberUtils';
import { useScrollPosition } from 'src/hooks/useScrollPosition';
import HackerNewsStoryContainer from 'src/containers/HackerNewsStoryContainer';
import { ErrorMessage } from 'src/components/ErrorMessage';

import { StoryGrid } from './styles';

export const MAX_STORIES = 500;
export const STORIES_PER_PAGE = 24;

type Props = {
    isError: boolean;
    isLoading: boolean;
    storyIds: number[];
    retry: () => void;
};

export const checkForScrollToBottom = (
    y: number,
    height: number,
    windowHeight: number
) => {
    return y + height <= windowHeight;
};

export const HackerNewsStories: FunctionComponent<Props> = ({
    isError,
    isLoading,
    storyIds,
    retry,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [storyCount, setStoryCount] = useState(STORIES_PER_PAGE);
    const isBrowser = typeof window !== `undefined`;

    // infinite scroll
    useScrollPosition(
        ({
            currPos,
        }: {
            currPos: { x: number; y: number; height: number; width: number };
        }) => {
            if (
                !isBrowser ||
                !scrollRef ||
                !scrollRef.current ||
                storyCount >= MAX_STORIES
            ) {
                return null;
            }

            const isAtBottom = checkForScrollToBottom(
                currPos.y,
                currPos.height,
                window.innerHeight
            );

            // if scrolled to bottom increment the story count
            if (isAtBottom) {
                const incrementedStoryCount = storyCount + STORIES_PER_PAGE;
                const limitedCount = limitNumberWithinRange(
                    incrementedStoryCount,
                    0,
                    MAX_STORIES
                );
                setStoryCount(limitedCount);
            }
        },
        [storyCount],
        scrollRef,
        false,
        300
    );

    return (
        <>
            {isError ? (
                <ErrorMessage
                    errorMessage='Unable to retrieve stories'
                    retry={retry}
                />
            ) : isLoading ? (
                <StoryGrid>
                    <span>Loading stories</span>
                    {/* TODO: proper loading state */}
                    {/* {[...Array(24)].map((e, i) => (
                        <StoryCardLoading />
                    ))} */}
                </StoryGrid>
            ) : (
                <StoryGrid ref={scrollRef}>
                    {storyIds.slice(0, storyCount).map((storyId: number) => (
                        <HackerNewsStoryContainer
                            key={storyId}
                            storyId={storyId}
                        />
                    ))}
                </StoryGrid>
            )}
        </>
    );
};

export default HackerNewsStories;

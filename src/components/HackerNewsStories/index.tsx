import React, { useState, useRef, FunctionComponent } from 'react';

import { useScrollPosition } from 'src/hooks/UseScrollPosition';
import HackerNewsStoryContainer from 'src/containers/HackerNewsStoryContainer';
import { ErrorMessage } from 'src/components/ErrorMessage';
import { StoryGrid } from './styles';

const MAX_STORIES = 500;
const STORIES_PER_PAGE = 24;

type Props = {
    isError: boolean;
    isLoading: boolean;
    storyIds: number[];
    retry: () => void;
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

            const loadMore = currPos.y + currPos.height <= window.innerHeight;

            if (loadMore) {
                const calculatedCount = storyCount + STORIES_PER_PAGE;
                const limitedCount =
                    calculatedCount > MAX_STORIES
                        ? MAX_STORIES
                        : calculatedCount;
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
                    {/* TODO: loading state */}
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

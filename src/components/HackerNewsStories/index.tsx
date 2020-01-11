import React, { FunctionComponent } from 'react';

// import { UserCard } from 'src/components/UserCard';
import { ErrorMessage } from 'src/components/ErrorMessage';
import { StoryGrid } from './styles';

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
                <StoryGrid>
                    {storyIds.map((storyId: number, index: number) => (
                        <p key={storyId}>{storyId} </p>
                        // <StoryCard key={storyId} storyId={storyId} />
                    ))}
                </StoryGrid>
            )}
        </>
    );
};

export default HackerNewsStories;

import React, { FunctionComponent } from 'react';

import { ErrorMessage } from 'src/components/ErrorMessage';
import { StoryCardWrapper } from './styles';

import { StoryType } from 'src/containers/HackerNewsStoryContainer';

type Props = {
    isError: boolean;
    isLoading: boolean;
    story: StoryType;
    retry: () => void;
};

export const HackerNewsStoryCard: FunctionComponent<Props> = ({
    isError,
    isLoading,
    story,
    retry,
}) => {
    return (
        <>
            {isError ? (
                <ErrorMessage
                    errorMessage='Unable to retrieve story'
                    retry={retry}
                />
            ) : isLoading ? (
                <>
                    <span>Loading story</span>
                    {/* TODO: loading state */}
                    {/* <StoryCardLoading /> */}
                </>
            ) : (
                story && <StoryCardWrapper>{story.title}</StoryCardWrapper>
            )}
        </>
    );
};

export default HackerNewsStoryCard;

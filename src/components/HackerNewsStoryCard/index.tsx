import React, {
    FunctionComponent,
    memo,
    useState,
    SyntheticEvent,
} from 'react';

import { ErrorMessage } from 'src/components/ErrorMessage';
import { Paragraph, Span } from 'src/components/Typography';
import {
    StoryCardWrapper,
    ScoreSection,
    MainContentWrapper,
    Title,
    AuthorRow,
    AuthorSpan,
    AuthorOuter,
    Link,
} from './styles';

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
    const [selected, setSelected] = useState(false);

    const toggleSelected = (e: SyntheticEvent) => {
        // TODO: there must be a more elegant way to do this
        // with styled components and typescript
        // we don't want anything to happen the title is clicked as it is a link
        if ((e.target as HTMLElement).localName === 'h4') {
            return null;
        }
        if (e.target) setSelected(!selected);
    };

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
            ) : story ? (
                <StoryCardWrapper onClick={toggleSelected} selected={selected}>
                    <ScoreSection>
                        <Paragraph color='white' textAlign='center'>
                            Score
                        </Paragraph>
                        <Paragraph color='white' textAlign='center'>
                            {story.score}
                        </Paragraph>
                    </ScoreSection>
                    <MainContentWrapper>
                        <Link href={story.url} target='_blank'>
                            <Title color='white'>{story.title}</Title>
                        </Link>
                        <AuthorOuter>
                            <AuthorRow color='white'>
                                <Span color='white'>By </Span>
                                <AuthorSpan color='white' bold={true}>
                                    {story.by}
                                </AuthorSpan>
                            </AuthorRow>
                        </AuthorOuter>
                    </MainContentWrapper>
                </StoryCardWrapper>
            ) : null}
        </>
    );
};

// this is going is potentially re-rendered with same props
// with infinite scroll so keep it in memory
export default memo(HackerNewsStoryCard);

import React from 'react';

import { H1 } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import HackerNewsStoriesContainer from 'src/containers/HackerNewsStoriesContainer';

export const Home = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1>Hacker News</H1>
                        <VerticalSpacer size='large' />
                        <HackerNewsStoriesContainer storyType='topstories' />
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default Home;

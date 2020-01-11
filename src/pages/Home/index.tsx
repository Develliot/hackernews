import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
export const Home = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1>Hacker News</H1>
                        <VerticalSpacer size='large' />
                        <Paragraph>App goes here</Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default Home;

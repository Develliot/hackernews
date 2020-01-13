import React, { useEffect, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import { HackerNewsStories } from 'src/components/HackerNewsStories';

const HACKER_NEWS_STORIES = 'https://hacker-news.firebaseio.com/v0/';

type Props = {
    storyType: 'topstories' | 'newstories' | 'beststories';
};

export const HackerNewsStoriesContainer: FunctionComponent<Props> = ({
    storyType,
}) => {
    const url = `${HACKER_NEWS_STORIES}${storyType}.json`;
    const { data, isLoading, isError, setUrl } = useGetRequest(url, []);
    const storyIds = data;
    // run once
    useEffect(() => {
        setUrl(url);
    }, [setUrl, url]);

    const retry = (): void => {
        setUrl(url);
    };

    return (
        <HackerNewsStories
            isError={isError}
            isLoading={isLoading}
            retry={retry}
            storyIds={storyIds}
        />
    );
};

export default HackerNewsStoriesContainer;

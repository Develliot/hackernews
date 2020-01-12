import React, { useEffect, FunctionComponent, memo } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import { HackerNewsStoryCard } from 'src/components/HackerNewsStoryCard';

const HACKER_NEWS_ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export type StoryType = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
};

type Props = {
    storyId: number;
};

export const HackerNewsStoryContainer: FunctionComponent<Props> = ({
    storyId,
}) => {
    const url = `${HACKER_NEWS_ITEM_URL}${storyId}.json`;
    const [story, isLoading, isError, setUrl] = useGetRequest(url, []);

    // run once
    useEffect(() => {
        setUrl(url);
    }, [setUrl]);

    const retry = (): void => {
        setUrl(url);
    };

    return (
        <HackerNewsStoryCard
            isError={isError}
            isLoading={isLoading}
            retry={retry}
            story={story}
        />
    );
};

export default memo(HackerNewsStoryContainer);

import React, { useEffect, useState, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import { HackerNewsStories } from 'src/components/HackerNewsStories';

const HACKER_NEWS_TOP_500 =
    'https://hacker-news.firebaseio.com/v0/topstories.json';

export const UsersContainer: FunctionComponent = () => {
    const url = HACKER_NEWS_TOP_500;
    const [storyIds, isLoading, isError, setUrl] = useGetRequest(url, []);

    useEffect(() => {
        if (!storyIds.length) {
            setUrl(url);
        }
    }, [setUrl, storyIds]);

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

export default UsersContainer;

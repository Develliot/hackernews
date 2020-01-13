import styled from 'styled-components';
import { H4, Span, Paragraph } from 'src/components/Typography';

export const StoryCardWrapper = styled.article`
    background-color: ${({
        selected,
        theme: {
            colors: { blue, pink },
        },
    }) => `${selected ? pink : blue}`};
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    grid-column: ${({ selected }: { selected: boolean }) =>
        selected ? `span 2` : `span 1`};
    grid-row: ${({ selected }: { selected: boolean }) =>
        selected ? `span 2` : `span 1`};

    &:hover {
        cursor: pointer;
    }
`;

export const ScoreSection = styled.div`
    flex-basis: 2rem;
    padding: ${({
        theme: {
            spacing: { small },
        },
    }) => small};
`;

export const MainContentWrapper = styled.div`
    flex-basis: 0px;
    flex-grow: 1;
    padding: ${({
        theme: {
            spacing: { small, medium },
        },
    }) => `${small} ${medium} ${small} 0`};
`;

export const Title = styled(H4)`
    font-size: ${({
        theme: {
            fontSizes: { small },
        },
    }) => small};
    color: ${({
        theme: {
            colors: { yellow },
        },
    }) => yellow};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    &:hover {
        text-decoration: underline;
    }
`;

export const AuthorSpan = styled(Span)`
    text-overflow: ellipsis;
`;

export const AuthorOuter = styled.div`
    position: relative;
`;

export const AuthorRow = styled(Paragraph)`
    left: 0;
    right: 0;
    position: absolute;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Link = styled.a`
    text-decoration: none;
`;

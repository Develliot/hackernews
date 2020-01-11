import styled from 'styled-components';

export const StoryGrid = styled.div`
    display: grid;
    /* grid-template-columns: repeat(6, 1fr); */
    grid-gap: 1rem;
    justify-content: center;
    align-content: start;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-rows: minmax(180px, auto);
`;

import styled from "styled-components";

export const Container = styled.div`
                display: flex;
                gap: 1.6rem;
                padding: 0.8rem;
                background: ${({ theme, isNew }) => isNew ? `${theme.COLORS.DARK_800}` : "transparent"};
                border-radius: 0.8rem;


`
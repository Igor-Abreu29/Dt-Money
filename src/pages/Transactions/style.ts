import styled from "styled-components";

export const TransactionsContainer = styled.main`
    max-width: 1120px;
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1rem;
    
    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        &:last-child {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }
`

interface HighLightProps {
    variant: 'income' | 'outcome'
}

export const HighLight = styled.span<HighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`
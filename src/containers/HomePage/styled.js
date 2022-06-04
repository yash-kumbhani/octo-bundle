import styled from 'styled-components';

import Card, {CardAction} from '../../components/Card';

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const CardStyle = styled(Card)`
    width: 300px;
`;

export const CardActionStyle = styled(CardAction)`
    text-align: center;
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 750px) {
        width: 30%;

        p {
            font-size: 12px;
        }

        span {
            font-size: 20px;
        }

        svg {
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.color};
`;
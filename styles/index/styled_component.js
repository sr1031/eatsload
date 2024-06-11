import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const flexBox = (props) => css`
    display: flex;
    flex-direction: ${props.column ? "column" : "row"};
`;

export const Container = styled.div`
    ${flexBox}
    height: 110vh;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    ${flexBox}
    align-items: center;
    padding: 228px 50px 83px 50px;
    width: 640px;
    height: 1138px;
    background-image: url("/img-bg@3x 1.png");
`;

export const Header = styled.div`
    ${flexBox}
    align-items: center;
    margin-bottom: 120px;
`;

export const Icon = styled.div`
    position: relative;
    margin-bottom: 23px;
`;

export const MappingImg = styled.img`
    content: url("/icons/Group.png");
`;

export const ShadowImg = styled.img`
    content: url("/icons/Rectangle 1.png");
    position: absolute;
    top: 78px;
    left: 0;
`;

export const Title = styled.span`
    font-size: 60px;
    color: white;
    font-weight: 700;
`;

export const WrapperMenu = styled.div`
    ${flexBox}
    width: 444px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 58px;
`;

export const Menu = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const DivideStick = styled.div`
    width: 1px;
    height: 21px;
    border: 2px #9F9F9F solid;
`;

export const KakaoOAuthBtn = styled.button`
    ${flexBox}
    width: 540px;
    height: 76px;
    font-size: 26px;
    font-weight: 700;
    background-color: #ffffff00;
    border: #FAE100 2px solid;
    border-radius: 38px;
    color: #FAE100;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img {
        margin-right: 29.55px;
    }
`;
import styled from "@emotion/styled";
import { flexBox } from "../styled_component";

export const UserForm = styled.form`
    ${flexBox};
    height: 320px;
    position: relative;

    & > button:nth-of-type(1) {
        top: 10px;
        left: 510px;
    }

    & > button:nth-of-type(2) {
        top: 110px;
        left: 510px;
    }

    & > button:nth-of-type(3) {
        margin-top: 28px;
    }
`;

export const WrapperInput = styled.div`
    ${flexBox}
    align-items: center;
    width: 540px;
    height: 65px;
    margin-bottom: ${(props) => (props.mgBtm ? "38px" : "")};

    & input:focus {
        outline: none;
        animation: ${(props) =>
            props.inputValue ? "" : "inputFocus 0.3s ease-in-out"};
    }

    @keyframes inputFocus {
        0% {
            width: 0px;
            color: black;
        }

        100% {
            width: 540px;
        }
    }
`;

export const UserInput = styled.input`
    width: 540px;
    height: 42px;
    border: none;
    border-bottom: #ffffff 1px solid;
    background: none;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
`;

export const DelBtn = styled.button`
    width: 20px;
    height: 20px;
    background-image: url("/Group (2).png");
    background-size: cover;
    border: none;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    opacity: ${(props) => props.inputValue? 0.6 : 0};
    pointer-events: ${(props) => props.inputValue? "all" : "none"};
`;

export const ErrorText = styled.span`
    font-size: 16px;
    color: #ff1b6d;
    align-self: self-start;
`;

export const RegistBtn = styled.button`
    width: 540px;
    height: 76px;
    background-color: #ff1b6f96;
    border-radius: 38px;
    border: none;
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    cursor: pointer;
`;


import Head from "next/head";
import {
    Container,
    Wrapper,
    Header,
    Icon,
    MappingImg,
    ShadowImg,
    Title,
    WrapperMenu,
    Menu,
    DivideStick,
    KakaoOAuthBtn

} from "../styles/index/styled_component";
import { RegistForm } from "./form/regist";

export default function Home() {
    return (
        <>
            <Head>
                <title>잇츠로드</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Container>
                <Wrapper column>
                    <Header column>
                        <Icon column>
                            <MappingImg />
                            <ShadowImg />
                        </Icon>
                        <Title>잇츠로드</Title>
                    </Header>
                    <RegistForm />
                    <WrapperMenu>
                        <Menu>이메일 찾기</Menu>
                        <DivideStick />
                        <Menu>비밀번호 찾기</Menu>
                        <DivideStick />
                        <Menu>회원 가입</Menu>
                    </WrapperMenu>
                    <KakaoOAuthBtn>
                        <img src="/Group (3).png"></img>카카오톡으로 로그인
                    </KakaoOAuthBtn>
                </Wrapper>
            </Container>
        </>
    );
}


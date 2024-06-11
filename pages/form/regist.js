import {
    DelBtn,
    UserForm,
    UserInput,
    RegistBtn,
    ErrorText,
    WrapperMenu,
    Menu,
    DivideStick,
    KakaoOAuthBtn,
    WrapperInput
} from "../../styles/index/form/regist_styled_component";
import { useForm, Controller } from "react-hook-form";

export const RegistForm = () => {
    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        alert(`${JSON.stringify(data)} 입력 완료! 성공!`);
    };

    return (
        <>
            <UserForm
                column
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    defaultValue={""}
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { name, ...rest } }) => (
                        <>
                            <WrapperInput column mgBtm inputValue={rest.value}>
                                <UserInput
                                    type="text"
                                    {...rest}
                                    
                                />
                                {errors.email && (
                                    <ErrorText>
                                        이메일 주소를 다시 확인해주세요.
                                    </ErrorText>
                                )}
                            </WrapperInput>
                            <DelBtn
                                type="button"
                                inputValue={rest.value}
                                onClick={() => {
                                    reset((fields) => ({
                                        ...fields,
                                        [name]: ""
                                    }));
                                }}
                            ></DelBtn>
                        </>
                    )}
                />

                <Controller
                    defaultValue={""}
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({ field: { name, ...rest } }) => (
                        <>
                            <WrapperInput column inputValue={rest.value}>
                                <UserInput
                                    type="password"
                                    {...rest}
                                    inputValue={rest.value}
                                />
                                {errors.password && (
                                    <ErrorText>
                                        8~16자의 영문, 숫자, 특수 문자만 사용
                                        가능합니다.
                                    </ErrorText>
                                )}
                            </WrapperInput>
                            <DelBtn
                                type="button"
                                inputValue={rest.value}
                                onClick={() => {
                                    reset((fields) => ({
                                        ...fields,
                                        [name]: ""
                                    }));
                                }}
                            ></DelBtn>
                        </>
                    )}
                />
                <RegistBtn>로그인</RegistBtn>
            </UserForm>
        </>
    );
};


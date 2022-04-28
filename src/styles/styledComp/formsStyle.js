import styled from "styled-components";

export const ContainerForm = styled.div`
    text-align: center;
    margin: 20px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 20px;

        input{
            padding: 6px 15px;
            border: 1px solid grey;
            border-radius: 4px;
        }
        input:focus{
            outline: 2px solid #F0AD64;
        }

        button{
            background: linear-gradient( #fff, #F3D184, #F0AD64);
            border: 1px solid #F0AD64;
            padding: 10px 30px;
            border-radius: 4px;
            margin: 20px;
            cursor: pointer;
        }
        button:hover{
            background: linear-gradient(#fff, #F0AD64, #F0AD64);
        }
    }

    p{
        a{
            color: #0E7184;
        }
    }
`
export const Error = styled.div`
    color: #FF0E0E;
    font-size: 14px;
`
export const LoginGoogleFace = styled.div`
    margin: 20px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    color: #3b5998;

    .icon{
        cursor: pointer;
        transition: .3s;
    }
    .icon:hover{
        transform: scale(1.1);
    }
`
import styled from "styled-components";


export const ContainerForm = styled.div`
    text-align: center;
    margin: 50px;
    /* background-color: ; */

    img.logoImg{
        width: 100px;
    }

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
            /* outline: 2px solid #F0AD64; */
        }

        button{
            /* background: #7fe881; */
            /* border: 1px solid #F0AD64; */
            padding: 10px 30px;
            border-radius: 4px;
            margin: 20px;
            cursor: pointer;
        }
        button:hover{
            /* background:  */
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
    /* margin: 20px; */
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    color: #3b5998;

    .iconContainer{
        width: 180px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        transition: .3s;

        p{
            font-size: 15px;
            color: white;
            margin: 3px;
        }
    }

    .iconContainerGoogle{
        background-color: #F23C3C;
    }

    .iconContainerFacebook{
        background-color: #64A2FF;
    }

    .iconContainer:hover{
        transform: scale(1.05);
    }

    .icon{
        font-size: 25px;
        margin: 5px;
        color: white;
    }

    .iconGoogle{
        padding: .5px 1px;
        border-radius: 50%;
    }

    .iconFacebook{
        /* background-color: white; */
        border-radius: 50%;
    }
`
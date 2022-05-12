import styled from "styled-components";


export const ContainerForm = styled.div`
    text-align: center;
    margin: 50px;
    /* background-color: ; */



    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 20px;

        input{
            padding: 6px 15px;
            border: 1px solid grey;
            border-radius: 10px;
        }
        input:focus{
            outline: 2px solid #488FB1;
        }


    }

    p{
        a{
            color: #0E7184;
            transition: .3s;
        }
        a:hover{
            color: #fff;
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
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 20px;
    margin: 5px;
    color: #3b5998;

    .iconContainer{
        width: 250px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: .3s;

        padding: 10px 20px;

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
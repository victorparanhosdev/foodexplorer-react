import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
`;

const ErrorMessage = styled.p`
    font-size: 4rem;
    color: #ff0000;
    font-weight: bold;
`;

const ButtonBack = styled.div`

    button {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
      font-weight: 700;
      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.2rem;
      }
    }
  
  `

export function ErrorElement() {
    const navigate = useNavigate()
    function buttonBack(){
        navigate("/")
    }

    return (
        <ErrorContainer>
                  <ButtonBack className="box-btn-back">
                    <button type="button" onClick={buttonBack}>
                        <MdArrowBackIos />
                        voltar
                    </button>
                </ButtonBack>
            <ErrorMessage>Rota não permitida!</ErrorMessage>
        </ErrorContainer>
    );
}
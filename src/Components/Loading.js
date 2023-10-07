import styled from "styled-components"

export default function LoadingSubmit() {
    return(
        <Spinner className="spinner-container-submit">
            <div className="spinner"></div>
        </Spinner>
    )
}

const Spinner = styled.div`
    position: fixed;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(154, 160, 167, 0.3);
    top: 0;
    z-index: 1;
    
    .spinner {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid #7e7c7c;
        border-top: 4px solid white;
        animation: rotating-spinner 1s linear infinite;
    }
    @keyframes rotating-spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(350deg);
        }
    }
`
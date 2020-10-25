import styled from 'styled-components'

const StyledCarousel = styled.div`
    background-image: url(${`${process.env.PUBLIC_URL}/image/code.jpg`});
    background-repeat : no-repeat;
	background-size : cover;

    width: 100vw;
    height: 100vh;

    color: white;
    
    text-align: center;

    h1 {
        padding-top: 40vh;
    }
    
    button {
        width: 200px;
    }
`

export default StyledCarousel
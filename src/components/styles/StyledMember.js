import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const StyledMember = styled(Card)`
    margin-left: 10vw;
    margin-right: 10vw;
    width: 80vw;

    .one, .two {
        height: 300px;
    }

    .two, .normal {
        display: none;
    }

    img {
        margin-top: 70px;
        margin-left: 70px;

        width: 150px;
        height: 150px;
        border-radius: 75px;
    }

    .sans {
        margin-top: 60px;
    }

    .akkkkki {
        text-align: left;
    }

    @media (max-width: 840px) {
        .one, .normal {
            display: none;
        }

        .two {
            display: flex;
        }
    }

    @media (max-width: 600px) {
        text-align: center;
        .normal {
            display: block; 
        }

        .one, .two {
            display: none;
        }

        img {
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            margin-bottom: -30px;
        }
    }
`

export default StyledMember
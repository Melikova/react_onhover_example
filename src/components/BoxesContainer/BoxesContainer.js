import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ColorBox } from '../ColorBox';
import {shuffle} from '../../helperFunctions/ShuffleArray'
import {removeArrayElement} from '../../helperFunctions/RemoveArrayElement'

const colors = ["#FF0000", "#00FFFF", "#0000FF", "#00008B", "#ADD8E6", "#800080", "#FFFF00", "#00FF00", "#FF00FF", "#FFC0CB", "#C0C0C0", "#000000", "#FFA500", "#A52A2A", "#008000"];

export function BoxesContainer(){
    let shuffledArray=shuffle(colors);
    return(
        <Container fluid>
            <Row>
                <Col className='d-flex flex-wrap p-0 gap-3'>
                    {shuffledArray.map((val, key)=><ColorBox key={key} backColor={val} changedColor={shuffledArray[Math.floor(Math.random() * shuffledArray.length)]}/>)}
                </Col>
            </Row>
        </Container>
    )
}
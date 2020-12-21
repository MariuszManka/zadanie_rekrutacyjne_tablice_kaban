import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { CONSTANS } from 'actions'
import { Draggable } from 'react-beautiful-dnd'
import { Collapse, } from '@material-ui/core'
import {StyledCardWrapper, StyledCardTitle, StyledCardContent, StyledIcon} from './Card.styled'

const Card = ({cardID, listID, index, title, content}) => {

 const [open, setOpen] = useState(false)
 const dispatch = useDispatch()

 const cardDelete = () =>  dispatch({ type: CONSTANS.CARD_DELETE, payload: { cardID, listID } })

  return(
   <Draggable draggableId={cardID} index={index}>
      {(provided)=> (
      <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
       <StyledCardWrapper onClick={() => setOpen(!open)}>
            <StyledIcon name="clear" onClick={() => cardDelete ()}/>
          <StyledCardTitle noWrap>{title}</StyledCardTitle> 
          <Collapse in={open}>
            <StyledCardContent>{content}</StyledCardContent>
          </Collapse>
       </StyledCardWrapper>
      </div>
      )}
   </Draggable>
)
}

Card.propTypes = {
   cardID: PropTypes.string.isRequired,
   listID: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}

export default Card

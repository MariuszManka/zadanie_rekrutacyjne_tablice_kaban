import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd'
import { Collapse, } from '@material-ui/core'
import {StyledCardWrapper, StyledCardTitle, StyledCardContent} from './Card.styled'

const Card = ({cardID, index, title, content}) => {

 const [open, setOpen] = useState(false)

  return(
   <Draggable draggableId={cardID} index={index}>
      {(provided)=> (
      <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
       <StyledCardWrapper onClick={() => setOpen(!open)}>
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
   index: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}

export default Card

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, } from '@material-ui/core'
import {StyledCardWrapper, StyledCardTitle, StyledCardContent} from './Card.styled'

const Card = ({title, content}) => {

 const [open, setOpen] = useState(false)
  return(
   <div>
    <StyledCardWrapper onClick={() => setOpen(!open)}>
       <StyledCardTitle noWrap>{title}</StyledCardTitle> 
       <Collapse in={open}>
         <StyledCardContent>{content}</StyledCardContent>
       </Collapse>
    </StyledCardWrapper>
   </div>
)
}

Card.propTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}

export default Card

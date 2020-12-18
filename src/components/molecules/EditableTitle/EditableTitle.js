import React, { useState } from 'react';
import {PropTypes} from 'prop-types'
import {StyledInput, StyledText} from './EditableTitle.styled'

const EditableInput = ({open, setOpen}) => (
   <div>
      <StyledInput
         autoFocus
         value="TODO" 
         onBlur={() => setOpen(!open)}
      />
   </div>
)

const EditableTitleText = ({open, setOpen}) => (
   <StyledText onClick={()=> setOpen(!open)}>
      TODO
   </StyledText>
)
   
const EditableTitle = () => {

   const [open, setOpen] = useState(false);

   return(
      <>
         {
            open ? (<EditableInput open={open} setOpen={setOpen}/> ) 
            : (<EditableTitleText open={open} setOpen={setOpen} /> )
         }
      </>
    )
}

EditableTitleText.propTypes = {
   open: PropTypes.bool.isRequired,
   setOpen: PropTypes.func.isRequired
}

EditableInput.propTypes = {
   open: PropTypes.bool.isRequired,
   setOpen: PropTypes.func.isRequired
}


export default EditableTitle

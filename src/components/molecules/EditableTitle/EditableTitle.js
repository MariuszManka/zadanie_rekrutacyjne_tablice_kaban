import React, { createContext, useContext, useState } from 'react';
import {PropTypes} from 'prop-types'
import {StyledInput, StyledText} from './EditableTitle.styled'

const EditableTitleContext = createContext({})

const EditableInput = () => {

   const context = useContext(EditableTitleContext)
   const {setOpen, open, listTitle} = context

   return (
         <StyledInput
            autoFocus
            value={listTitle} 
            onBlur={() => setOpen(!open)}
         />
   )
} 


const EditableTitleText = () => {

   const context = useContext(EditableTitleContext)
   const {setOpen, open, listTitle} = context

   return (
   <StyledText onClick={()=> setOpen(!open)}>
      {listTitle}
   </StyledText>
   )
}

const EditableTitle = ({listTitle}) => {

   const [open, setOpen] = useState(false);

   return(
      <EditableTitleContext.Provider value={{open, setOpen, listTitle}}>
         {
            open ? (<EditableInput /> ) : (<EditableTitleText /> )
         }
      </EditableTitleContext.Provider>
    )
}

EditableTitle.propTypes = {
   listTitle: PropTypes.string.isRequired,
}

export default EditableTitle

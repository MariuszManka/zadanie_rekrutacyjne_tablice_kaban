import React, { createContext, useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CONSTANS } from 'actions'
import { PropTypes } from 'prop-types'
import { StyledText, StyledInput } from './EditableTitle.styled'

const EditableTitleContext = createContext({})

const EditableInput = () => {

   const context = useContext(EditableTitleContext)
   const { setOpen, open, listTitle, listID } = context
   const [title, setTitle] = useState(listTitle)
   const dispatch = useDispatch()

   const handleBlur = () => {
      if (title) {
         dispatch({ type: CONSTANS.CHANGE_TITLE, payload: { listID, newTitle: title } })
      }
      setOpen(!open)
   }

   const handleKeyUp = key => {
      if (title && key === 'Enter') {
         dispatch({ type: CONSTANS.CHANGE_TITLE, payload: { listID, newTitle: title } })
         setOpen(!open)
      }
   }

   return (
      <StyledInput
         autoFocus
         value={title.toUpperCase()}
         onKeyUp={(e) => handleKeyUp(e.key)}
         onChange={(e) => setTitle(e.target.value)}
         onBlur={() => handleBlur()}
      />
   )
}


const EditableTitleText = () => {

   const context = useContext(EditableTitleContext)
   const { setOpen, open, listTitle } = context

   return (
      <StyledText onClick={() => setOpen(!open)}>
         {listTitle}
      </StyledText>
   )
}

const EditableTitle = ({ listTitle, listID }) => {

   const [open, setOpen] = useState(false)

   return (
      <EditableTitleContext.Provider value={{ open, setOpen, listTitle, listID }}>
         {
            open ? (<EditableInput />) : (<EditableTitleText />)
         }
      </EditableTitleContext.Provider>
   )
}

EditableTitle.propTypes = {
   listID: PropTypes.string.isRequired,
   listTitle: PropTypes.string.isRequired,
}

export default EditableTitle

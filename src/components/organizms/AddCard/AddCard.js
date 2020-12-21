import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import { CONSTANS } from 'actions'
import PropTypes from 'prop-types'
import {Add, Clear} from '@material-ui/icons'
import { Collapse,    Grid, IconButton, Typography } from '@material-ui/core'
import {Input} from 'components/atoms'
import { StyledAddCard, StyledBox, StyledButton } from "./AddCard.styled";


const AddCardInputs = ({setOpen, listID}) => {
   
   const dispatch = useDispatch()
   const [content, setContent] = useState("")
   const [title, setTitle] = useState("")

   const handleClear = () => {
      setTitle("")
      setContent("")
      setOpen(false)
   }

   const addCard = useCallback(
    () => {
       dispatch({ type: CONSTANS.ADD_CARD, payload: {listID, content, title}})
       handleClear()
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [content, dispatch, title]
  )

return(
   <>
      <Input name="title" value={title} setValue={setTitle}  />
      <Input name="content" value={content} setValue={setContent} multiline rows={4}/>

      <div>
         <StyledButton
            variant="contained" 
            color="primary"
            onClick={() => {
               addCard()
               setOpen(false)
            }}
         >
               Add Card
         </StyledButton>
         <IconButton  onClick={() => handleClear()}>
            <Clear />
         </IconButton>
      </div>
   </>   
)}

const AddCard = ({listID}) => {
   const [open, setOpen] = useState(false)
return (
  <StyledBox >
       <Collapse in={open}>
         <AddCardInputs setOpen={setOpen} listID={listID}/>
       </Collapse>
    <StyledAddCard elevation={0} onClick={() => setOpen(!open) }>
       <Collapse in={!open}>
         <Grid container  direction="row"  justify="flex-start"  alignItems="center" >
         <Add />
         <Typography>
            Add a Card
         </Typography>
         </Grid>
       </Collapse>
    </StyledAddCard>
  </StyledBox>
)}

AddCardInputs.propTypes = {
   setOpen: PropTypes.func.isRequired,
   listID: PropTypes.string.isRequired
}

AddCard.propTypes = {
   listID: PropTypes.string.isRequired
}

export default AddCard

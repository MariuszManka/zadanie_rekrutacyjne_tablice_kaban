import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {Add, Clear} from '@material-ui/icons'
import { Collapse, Grid, IconButton,  Typography } from '@material-ui/core'
import { StyledAddCard, StyledBox, StyledInputContainer, StyledInputBase, StyledButton } from "./AddCard.styled";

const AddCardInput = ({setOpen}) => (
   <>
      <StyledInputContainer>
         <StyledInputBase
          multiline 
          fullWidth 
          onBlur={() => setOpen(false)}
          />
      </StyledInputContainer>
      <div>
         <StyledButton
            variant="contained" 
            color="primary"
            onClick={() => setOpen(false)}
         >
               Add Card
         </StyledButton>
         <IconButton>
            <Clear />
         </IconButton>
      </div>
   </>
)

const AddCard = () => {
   const [open, setOpen] = useState(false)
return (
  <StyledBox >
       <Collapse in={open}>
         <AddCardInput setOpen={setOpen} />
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

AddCardInput.propTypes = {
   setOpen: PropTypes.func.isRequired
}

export default AddCard

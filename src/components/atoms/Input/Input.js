import React from 'react'
import PropTypes from 'prop-types'
import { StyledInputBase, StyledInputContainer } from "./Input.styled"


const Input = ({ name, value, setValue, ...other }) => (
   <StyledInputContainer elevation={1}>
      <StyledInputBase
         name={name}
         value={value}
         fullWidth
         onChange={(e) => setValue(e.target.value)}
         {...other}
      />
   </StyledInputContainer>
)

Input.propTypes = {
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   setValue: PropTypes.func.isRequired,
}

export default Input
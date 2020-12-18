import React from 'react';
import PropTypes from 'prop-types';
import {Icon as MaterialIcon} from '@material-ui/core';

const Icon = ({name, ...props}) => ( 
      <MaterialIcon {...props}>
         {name}
      </MaterialIcon>
   )

Icon.propTypes = {
   name: PropTypes.string.isRequired
}

export default Icon


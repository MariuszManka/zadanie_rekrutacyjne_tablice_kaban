import React from 'react';
import { TopBar } from 'components/molecules'
import { ListBoard } from 'components/organizms'
import {StyledMainView} from './MainView.style'

const MainView = () => (
   <StyledMainView container  direction="column"  wrap="nowrap">
      <TopBar item/>
      <ListBoard item/>
   </StyledMainView>
   )

export default MainView
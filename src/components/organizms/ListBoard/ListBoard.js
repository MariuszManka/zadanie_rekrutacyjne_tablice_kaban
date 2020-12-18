/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux'
import  List  from '../List/List'
import { StyledListWrapper } from './ListBoard.styled'

const ListBoard = () => {

    const lists = useSelector((state) => state.lists )
    const values = Object.values(lists)

    return(
      <StyledListWrapper> 
          {
              values.map(list => <List key={list.id} listID={list.id}/>)
          }
      </StyledListWrapper>
      )

} 

export default ListBoard

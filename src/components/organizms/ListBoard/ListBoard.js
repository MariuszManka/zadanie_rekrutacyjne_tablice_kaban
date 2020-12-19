/* eslint-disable no-unused-vars */
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import  List  from '../List/List'
import { StyledListWrapper } from './ListBoard.styled'

const ListBoard = () => {

    const lists = useSelector((state) => state )

    return(
    <DragDropContext>
        <StyledListWrapper> 
            {
                lists.map(list => <List key={list.id} listID={list.id} listTitle={list.title}/>)
            }
        </StyledListWrapper>
    </DragDropContext>
      )

} 

export default ListBoard

import React from 'react'
import { useSelector } from 'react-redux'
import List from '../List/List'
import { StyledListWrapper } from './ListBoard.styled'

const ListBoard = () => {

    const lists = useSelector((state) => state)

    return (
        <StyledListWrapper >
            {
                lists.map((list, index) => <List key={list.id} listID={list.id} listTitle={list.title} index={index} />)
            }
        </StyledListWrapper>

    )
}

export default ListBoard

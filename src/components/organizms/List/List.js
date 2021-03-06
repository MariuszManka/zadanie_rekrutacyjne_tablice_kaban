/* eslint-disable no-shadow */
import React from 'react'
import PropTypes from 'prop-types'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { AddCard, Card, EditableTitle } from 'components/molecules'
import { Paper } from '@material-ui/core'
import { ListStyles } from './List.styled'

const ListCards = ({ listID }) => {

   const allLists = useSelector(state => state)
   const currentList = allLists.filter(list => list.id === listID)

   return (
      currentList[0].cards.map((card, index) => (
         <Card
            key={card.id}
            cardID={card.id}
            index={index}
            content={card.content}
            title={card.title} 
            listID={listID}
            />
      ))
   )
}

const List = ({ listID, index, listTitle }) => {
   const classes = ListStyles()

   return (
      <Draggable draggableId={listID} index={index} >
         {provided => (
            <div ref={provided.innerRef} {...provided.draggableProps} >
               <Paper className={classes.root} elevation={3} {...provided.dragHandleProps}>
                  <EditableTitle listTitle={listTitle} listID={listID} />
                  <Droppable droppableId={listID}>
                     {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                           <ListCards listID={listID} />
                           {provided.placeholder}
                        </div>
                     )}
                  </Droppable>
                  <AddCard listID={listID} />
               </Paper>
            </div>
         )}

      </Draggable>
   )
}

List.propTypes = {
   listTitle: PropTypes.string.isRequired,
   listID: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,

}

ListCards.propTypes = {
   listID: PropTypes.string.isRequired
}

export default List

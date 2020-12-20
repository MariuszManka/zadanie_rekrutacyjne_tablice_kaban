import React from 'react'
import { TopBar } from 'components/molecules'
import { ListBoard } from 'components/organizms'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { CONSTANS } from 'actions'
import { useDispatch } from 'react-redux'
import { StyledMainView } from './MainView.style'


const MainView = () => {
   const dispatch = useDispatch()


   const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result

      if (!destination)
         return

      if (destination) {
         const payload = {
            droppableIdStart: source.droppableId,
            droppableIdEnd: destination.droppableId,
            droppableIndexStart: source.index,
            droppableIndexEnd: destination.index,
            draggableId,
            type
         }

         dispatch({ type: CONSTANS.DRAG_HAPPEND, payload })
      }
   }

   return (
      <StyledMainView container direction="column" wrap="nowrap">
         <TopBar item />
         <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <Droppable droppableId="list-wrapper" type="list" direction="horizontal">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ListBoard item />
                     {provided.placeholder}
                  </div>
               )}
            </Droppable>
         </DragDropContext>
      </StyledMainView>
   )

}

export default MainView
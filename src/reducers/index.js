/* eslint-disable no-param-reassign */
import { CONSTANS } from 'actions'
import nextId, { setPrefix } from 'react-id-generator'

setPrefix('card-')


const allLists = [
   {
      id: nextId("list-"),
      title: 'Todo',
      cards: [
         {
            id: nextId(),
            title: 'Walk with the dog',
            content: 'Take Alex for a walk everyday at: 8 am, 15 pm and 21 pm',
         },
         {
            id: nextId(),
            title: 'Buy Christmas gifts',
            content: "Buy christmas gifts for Annie, John and Ralph",
         }],
   },
   {
      id: nextId("list-"),
      title: 'In  progress',
      cards: [
         {
            id: nextId(),
            title: 'Make a dinner',
            content: 'Buy some ingredients and make a delicious dish',
         },
         {
            id: nextId(),
            title: 'Watch TV series',
            content: 'Finish watching the 4 seasons of Rick & Morty',
         },
         {
            id: nextId(),
            title: 'Do Homework',
            content: "Complete math and physics homework for next week",
         },],
   }, {
      id: nextId("list-"),
      title: 'Complete',
      cards: [{
         id: nextId(),
         title: 'Complete the application',
         content: 'Design, create and develop a desktop application based on React and Redux',
      }],
   },
]

const rootReducer = (state = allLists, action) => {
   switch (action.type) {
      case CONSTANS.ADD_CARD: {

         const { payload: { content, listID, title } } = action

         const newCard = {
            id: nextId(),
            title,
            content
         }

         const newState = state.map(list => {

            if (list.id === listID) {
               return {
                  ...list,
                  cards: [...list.cards, newCard]
               }
            }
            return list
         })
         return newState
      }
      case CONSTANS.CHANGE_TITLE: {
         const { payload: { listID, newTitle } } = action


         const newState = state.map(list => {

            if (list.id === listID) {
               list.title = newTitle
               return {
                  ...list,
               }
            }
            return list
         })
         return newState
      }
      case CONSTANS.DRAG_HAPPEND: {

         const {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            type
         } = action.payload

         const newState = [...state]

         if (type === 'list') {
            const list = newState.splice(droppableIndexStart, 1)
            newState.splice(droppableIndexEnd, 0, ...list)
            return newState
         }

         if (droppableIdStart === droppableIdEnd) {
            const lists = state.find(list => droppableIdStart === list.id)
            const card = lists.cards.splice(droppableIndexStart, 1)
            lists.cards.splice(droppableIndexEnd, 0, ...card)
         }

         if (droppableIdStart !== droppableIdEnd) {
            const listStart = state.find(list => droppableIdStart === list.id)
            const card = listStart.cards.splice(droppableIndexStart, 1)
            const listEnd = state.find(list => droppableIdEnd === list.id)
            listEnd.cards.splice(droppableIndexEnd, 0, ...card)
         }

         return newState
      }


      default:
         return state
   }
}

export default rootReducer
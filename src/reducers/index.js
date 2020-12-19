import { CONSTANS } from 'actions'

const allLists = [
      {
         id: 'list-1',
         title: 'TODO',
         cards: [
         {
            id: 'card-1',
            title: 'Walk with the dog',
            content: 'Take Alex for a walk everyday at: 8 am, 15 pm and 21 pm',
         },
         {
            id: 'card-2',
            title: 'Buy Christmas gifts',
            content: "Buy christmas gifts for Annie, John and Ralph",
         }],
      },
      {
         id: 'list-2',
         title: 'IN PROGRESS',
         cards: [
         {
            id: 'card-3',
            title: 'Make a dinner',
            content: 'Buy some ingredients and make a delicious dish',
         },
         {
            id: 'card-4',
            title: 'Watch TV series',
            content: 'Finish watching the 4 seasons of Rick & Morty',
         },
         {
            id: 'card-5',
            title: 'Do Homework',
            content: "Complete math and physics homework for next week",
         },],
      },{
         id: 'list-3',
         title: 'COMPLETE',
         cards: [{
            id: 'card-6',
            title: 'Complete the application',
            content: 'Design, create and develop a desktop application based on React and Redux',
         }],
      },
]
   
const rootReducer = (state = allLists, action) => {
   switch (action.type) {
      case CONSTANS.ADD_CARD: {

         const {payload: {content, listID, title }} = action

         const newCard = {
            id: 'card-7',
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
   
      default:
         return state
   }
};

export default rootReducer
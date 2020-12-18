/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { AddCard, Card,EditableTitle } from 'components/molecules'
import { Paper } from '@material-ui/core'
import {ListStyles} from './List.styled'

const ListCards = ({listID}) => {

   const allLists = useSelector(state => state.lists)
   const list = allLists && allLists[listID]
   
   return (
      list.cards.map(card => <Card key={card.id} content={card.content} title={card.title}/>)
   )
}

const List = ({listID}) => {
   const classes = ListStyles()

   return(
      <div>
         <Paper className={classes.root}  elevation={3}>
         <EditableTitle />
         <ListCards listID={listID}/>
         <AddCard />
         </Paper>
      </div>
 ) 
}

List.propTypes = {
   listID: PropTypes.string.isRequired
}

ListCards.propTypes = {
   listID: PropTypes.string.isRequired
}

export default List

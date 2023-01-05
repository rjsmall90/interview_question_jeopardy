import React from 'react'
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import card_data from '../../data/card-data'

const questionOptions_styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 175px)',
    gridGap: '10px',
    padding: '10px',
    textAlign: 'center',
}
const categories = card_data.categories

const QuestionOptions = () => {
    return (
        <div style={questionOptions_styles}>
            { categories.map((category) => {
               return (
                    <>
                        { category.answers.map((questions) => {
                            return (
                                <Card key={questions.cardId} style={{gridColumn: questions.categoryId, gridRow: questions.cardId}}>
                                    <CardContent  sx={{fontFamily: 'Times'}}>
                                        <Typography variant='body1'>
                                            category: {questions.categoryId}
                                        </Typography>
                                        <List sx={{fontFamily: 'Times'}}>
                                            <ListItem>
                                                <ListItemText primary={questions.questionOptions.a} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary={questions.questionOptions.b} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary={questions.questionOptions.c} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary={questions.questionOptions.d} />
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Card>
                            )
                        } )}
                    </>
                )
            })}
        </div>     
    )
}

export default QuestionOptions;
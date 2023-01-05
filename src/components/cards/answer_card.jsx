import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import card_data from '../../data/card-data'

const answerCard_styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 175px)',
    gridGap: '10px',
    padding: '10px',
    textAlign: 'center',
}
const categories = card_data.categories

const AnswerCard = () => {
    return (
        <div style={answerCard_styles}>
            { categories.map((category) => {
               return (
                    <>
                        { category.answers.map((answers) => {
                            return (
                                <Card key={answers.cardId} style={{gridColumn: answers.categoryId, gridRow: answers.cardId}}>
                                    <CardContent>
                                        <Typography variant='body1' sx={{fontFamily: 'Arial'}}>
                                            category: {answers.categoryId}
                                        </Typography>
                                        <Typography variant='h6' sx={{fontFamily: 'Arial'}}>
                                            {answers.answer}
                                        </Typography>
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

export default AnswerCard;
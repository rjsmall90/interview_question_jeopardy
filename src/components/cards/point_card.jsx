import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import card_data from '../../data/card-data'

const pointCard_styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 175px)',
    gridGap: '10px',
    padding: '10px',
    textAlign: 'center',
}
const categories = card_data.categories

const PointCard = () => {
    return (
        <div style={pointCard_styles}>
            { categories.map((category) => {
               return (
                    <>
                        { category.answers.map((points) => {
                            console.log(points)
                            return (
                                <Card key={points.cardId} style={{gridColumn: points.categoryId, gridRow: points.cardId}}>
                                    <CardContent>
                                        <Typography variant='h4' sx={{fontFamily: 'Arial'}}>
                                            {points.pointValue}
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
export default PointCard; 
import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import card_data from '../../data/card-data'

const category_styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 175px)',
    gridGap: '10px',
    textAlign: 'center',
    padding: '10px'
}
const category = card_data.categories

const Categories = () => {
    console.log(card_data.categories)
    return (
        <div style={category_styles}>
            { category.map((name) => {
                return (
                    <Card key={name.categoryId}>
                        <CardContent>
                            <Typography variant='h4'>
                                {name.categoryName}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>     
    )
}

export default Categories; 
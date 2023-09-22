import express from 'express'
import cors from 'cors'
import { Chance } from 'chance'

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const chance = new Chance()
const cards = [...Array(99).keys()].map(id => {
    return {
        id,
        name: chance.name(),
        isLike: -1
    }
})

app.get('/', (req, res) => {
    res.json(cards)
})

app.post('/card/:id', function (req, res) {
    const selectedCard = cards.find((item) => {
        return item.id === parseInt(req.params.id)
    })
    selectedCard['isLike'] = parseInt(req.body.like)
    res.json({ "response": "updated" })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
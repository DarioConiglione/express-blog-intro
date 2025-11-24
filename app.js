const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        titolo: "Perché devi iniziare ad investire",
        contenuto: "Questo contenuto devo ancora generarlo bene perché voglio capire prima come funziona la logica, poi penso a perfezionare",
        immagine: "/images/ciambellone.jpg",
        tags: ["testo1", "testo2", "testo3", "testo4"]
    },
    {
        titolo: "Investire in obligazioni",
        contenuto: "Questo contenuto devo ancora generarlo bene perché voglio capire prima come funziona la logica, poi penso a perfezionare",
        immagine: "/images/cracker_barbabietola.jpg",
        tags: ["tagA", "tagB", "tagC", "tagD"]
    },
    {
        titolo: "Investire in azioni",
        contenuto: "Questo contenuto devo ancora generarlo bene perché voglio capire prima come funziona la logica, poi penso a perfezionare",
        immagine: "/images/pane_fritto_dolce.jpg",
        tags: ["uno", "due", "tre", "quattro"]
    },
    {
        titolo: "Oro, materie prime ed altre asset class",
        contenuto: "Questo contenuto devo ancora generarlo bene perché voglio capire prima come funziona la logica, poi penso a perfezionare",
        immagine: "/images/barbabietola.jpg",
        tags: ["alpha", "beta", "gamma", "delta"]
    },
    {
        titolo: "Come investire in ETF",
        contenuto: "Questo contenuto devo ancora generarlo bene perché voglio capire prima come funziona la logica, poi penso a perfezionare",
        immagine: "/images/torta_paesana.jpg",
        tags: ["x", "y", "z", "w"]
    }
];

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio Blog!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


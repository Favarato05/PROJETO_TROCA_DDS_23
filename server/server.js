// importação do módulo express
const express = require("express")

const app = express()

// módulo do node para lidar com caminho de arquivos
const path = require('path')

console.log(path.join(__dirname, ":estou aqui"))
const port = 3000

// Criação de rotas padrão
app.get("/", (req,res) => {
    res.status(200).json( {"mensagem": "Olá, seja Bem-vindo"} )
})

app.get("/login", (req, res) => { 
    res.sendFile(path.join(__dirname, "../client/views/auth/login.html"));
})

app.get("/cadastro", (req, res) => { 
    res.sendFile(path.join(__dirname, "../client/views/auth/cadastro.html"))
})

// Importar as rotas de usuario
const usuariosRoutes = require("./routes/usuarioRoutes.js")

// Requisições comecando com /usuarios é gerenciada pelo sub-arquivo de notas
app.use("/usuarios", usuariosRoutes)



app. listen(port, () => {
    console.log(`Servidor ativo na porta: ${port}`)
    console.log(`Link: http://localhost:${port}`)
})

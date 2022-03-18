const Sequelize = require('sequelize')
const inst = require('../../api/database')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    freezeTableName: 'fornecedores',
    timestamps:true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'

}

module.exports = inst.define('fornecedor', colunas, opcoes)
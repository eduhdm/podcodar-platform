'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          photoUrl: 'https://i.picsum.photos/id/237/200/300.jpg',
          bioDescription:
            'Bora pra action. Trabalho é aprendizado, tudo é um só, onelife. O segredo do sucesso é começar antes de estar pronto. Não adianta ter conhecimento se você não tem action. Desafie-se. Viva em busca da masterização e do profissionalismo, every f*ing day. Se é pra entrar no jogo, vai all-in. Viva em busca da masterização e do profissionalismo, every f*ing day. Felicidade é a nova produtividade. Você tá realmente obcecado pelos seus sonhos? Se é pra entrar no jogo, vai all-in. Não adianta ter conhecimento se você não tem action. Se você não tá no jogo do longo prazo, então seu futuro é estar fora do jogo. O segredo do sucesso é começar antes de estar pronto. Construa algo que seja top. Não adianta ter conhecimento se você não tem action. Construa algo que seja top. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}

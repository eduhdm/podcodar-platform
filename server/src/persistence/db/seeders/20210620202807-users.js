'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@doe.com',
          photo_url: 'https://i.picsum.photos/id/237/200/300.jpg',
          token: 'dkajbdkjsabda',
          bio_description:
            'Bora pra action. Trabalho é aprendizado, tudo é um só, onelife. O segredo do sucesso é começar antes de estar pronto. Não adianta ter conhecimento se você não tem action. Desafie-se. Viva em busca da masterização e do profissionalismo, every f*ing day. Se é pra entrar no jogo, vai all-in. Viva em busca da masterização e do profissionalismo, every f*ing day. Felicidade é a nova produtividade. Você tá realmente obcecado pelos seus sonhos? Se é pra entrar no jogo, vai all-in. Não adianta ter conhecimento se você não tem action. Se você não tá no jogo do longo prazo, então seu futuro é estar fora do jogo. O segredo do sucesso é começar antes de estar pronto. Construa algo que seja top. Não adianta ter conhecimento se você não tem action. Construa algo que seja top. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Jane',
          last_name: 'Dune',
          email: 'jane@dune.com',
          photo_url: 'https://i.picsum.photos/id/237/200/300.jpg',
          token: 'dkajbdkjsabda',
          bio_description:
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

import jsonAjax from './JSONAjaxRequest';

jsonAjax(
  'http://localhost:8081/games',
  'POST',
  {type: 'guess_number'},
  (game) => {
    console.log('Number game created', game);

    jsonAjax(
      'http://localhost:8081/games/' + game.id + '/moves',
      'POST',
      {move: 3},
      (moveResponse) => {
        console.log('Got move response', game.id, moveResponse);
      },
      (error) => {
        console.log('Failed to create number game move', error);
      }
    );
  },
  (error) => {
    console.log('Failed to create number game', error);
  }
);

jsonAjax(
  'http://localhost:8081/games',
  'POST',
  {type: 'guess_word'},
  (game) => {
    console.log('Number game created', game);

    jsonAjax(
      'http://localhost:8081/games/' + game.id + '/moves',
      'POST',
      {move: 'basil'},
      (moveResponse) => {
        console.log('Got move response', game.id, moveResponse);
      },
      (error) => {
        console.log('Failed to create word game move', error);
      }
    );
  },
  (error) => {
    console.log('Failed to create number game', error);
  }
);

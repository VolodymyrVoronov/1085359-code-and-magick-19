'use strict';

var RESULTS_WIDTH = 420;
var RESULTS_HIGHT = 270;
var RESULTS_POSITION_X = 100;
var RESULTS_POSITION_Y = 10;
var GAP = 10;
var FONT_GAP = 250;
var FONT_GAP_Y = 100;
var FONT_GAP_X = 50;
var BAR_WIDTH = 40;
var BAR_POSITON_Y = 80;
var BAR_GAP = 50;

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(RESULTS_POSITION_X + GAP, RESULTS_POSITION_Y + GAP, RESULTS_WIDTH, RESULTS_HIGHT);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(RESULTS_POSITION_X, RESULTS_POSITION_Y, RESULTS_WIDTH, RESULTS_HIGHT);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hangung';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов: ', 120, 65);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.floor(times[i]), FONT_GAP_X = FONT_GAP_X + 100, FONT_GAP_Y - 20);
    ctx.fillStyle = generateColor();
    ctx.fillRect(BAR_GAP = BAR_GAP + 100, BAR_POSITON_Y, BAR_WIDTH, (Math.floor(times[i] / 20)));
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Silly Goose', 120, FONT_GAP);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Keks', 250, FONT_GAP);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Katya', 350, FONT_GAP);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Igor', 450, FONT_GAP);
};

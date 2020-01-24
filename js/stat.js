'use strict';

var RESULTS_WIDTH = 420;
var RESULTS_HEIGHT = 270;
var RESULTS_POSITION_X = 110;
var RESULTS_POSITION_Y = 10;
var GAP = 10;
var FONT_GAP = 250;
// var FONT_GAP_Y = 100;
var FONT_GAP_X = 50;
var BAR_WIDTH = 40;
// var BAT_HEIGHT = 150;
var BAR_POSITON_Y = 230;
var BAR_GAP = 50;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
// var NAME_COLOR = 'rgba(0, 0, 0, 1)';
var NAME_GAP = 50;
var MULTIPLIER = 100;

function paintingPlayer(arr, ctx, i) {
  if (arr[i] === 'Goose') {
    ctx.fillStyle = 'red';
  } else {
    ctx.fillStyle = getRandomColor();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateCloud(ctx, positionX, positionY, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, width, height);
}

function generateShadow(ctx, positionX, postionY, width, height, gap, color) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX + gap, postionY + gap, width, height);
}

// function generateName(ctx, arr, i, nameGap, multiplier, fontGap, color) {
//   ctx.fillStyle = color;
//   ctx.fillText(arr[i], nameGap = nameGap + multiplier, fontGap);
// }

// function generateBar(ctx, barGap, multiplier, positionY, width, heightOfBar) {
//   ctx.fillRect(barGap = barGap + multiplier, positionY, width, heightOfBar);
// }

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var maxTime = Math.floor(getMaxElement(times));
  // console.log(maxTime);
  generateShadow(ctx, RESULTS_POSITION_X, RESULTS_POSITION_Y, RESULTS_WIDTH, RESULTS_HEIGHT, GAP, SHADOW_COLOR);
  generateCloud(ctx, RESULTS_POSITION_X, RESULTS_POSITION_Y, RESULTS_WIDTH, RESULTS_HEIGHT, CLOUD_COLOR);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hangung';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 55);

  for (var i = 0; i < players.length; i++) {
    var barHeight = -(150 * times[i] / maxTime);
    // console.log(random);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.floor(times[i]), FONT_GAP_X = FONT_GAP_X + MULTIPLIER, barHeight + 220);
    paintingPlayer(players, ctx, i);
    // ctx.rotate( (Math.PI / 180) * 25);
    // generateBar(ctx, BAR_GAP, MULTIPLIER, BAR_POSITON_Y, BAR_WIDTH, random);
    ctx.fillRect(BAR_GAP = BAR_GAP + MULTIPLIER, BAR_POSITON_Y, BAR_WIDTH, barHeight);
    // console.log(Math.floor(times[i]) / (maxTime / 100));
    // generateName(ctx, players, i, NAME_GAP, MULTIPLIER, FONT_GAP, NAME_COLOR);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], NAME_GAP = NAME_GAP + MULTIPLIER, FONT_GAP);
  }
};

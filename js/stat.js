
'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var HEIGHT_TEXT = 80;
var BAR_HEIGTH = 150;
var BAR_WIDTH = 40;
var BAR_IDENT = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px sens-serif';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP + GAP);

  var maxTime = getMaxElement(time);

  for (var i = 0; i < players.length; i += 1) {
    var barHeight = Math.floor(BAR_HEIGTH * time[i]) / maxTime;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText('Point' + (1 + i), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_IDENT) * i, CLOUD_Y + HEIGHT_TEXT + BAR_HEIGTH - barHeight - GAP - FONT_GAP);
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_IDENT) * i, CLOUD_HEIGHT - GAP);
    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(226, 91%, 41%)';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_IDENT) * i, CLOUD_Y + HEIGHT_TEXT + BAR_HEIGTH - barHeight, BAR_WIDTH,
        barHeight);
  }
};


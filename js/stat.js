'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;

var getRandom = function (min, max) {
  return (Math.random() * (max - min) + min);
};

var getMaxResult = function (array) {
  var maxResult = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxResult) {
      maxResult = array[i];
    }
  }
  return maxResult;
};

var drawText = function (ctx, text, x, y) {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
  ctx.strokeText(text, x, y);
};

var drawRect = function (ctx, fillColor, strokeColor, x, y, width, height) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x, y, width, height);
};


window.renderStatistics = function (ctx, names, times) {
  drawRect(ctx, 'rgba(0, 0, 0, .7)', 'rgba(0, 0, 0, 1)', 110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
  drawRect(ctx, 'rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)', 100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  drawText(ctx, 'Ура вы победили!', 120, 45);
  drawText(ctx, 'Список результатов:', 120, 65);

  var barPositionX = 150;

  var maxResult = getMaxResult(times);

  for (var i = 0; i < names.length; i++) {
    drawText(ctx, names[i], barPositionX, 260);

    var barColor = names[i] !== 'Вы' ? 'rgba(0, 0, 255, ' + getRandom(1, 0.4) + ')' : 'rgba(255, 0, 0, 1)';

    var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxResult;

    ctx.fillStyle = barColor;
    ctx.fillRect(barPositionX, 240, BAR_WIDTH, -1 * barHeight);

    drawText(ctx, Math.round(times[i]), barPositionX, 240 - barHeight - 5);

    barPositionX += (BAR_WIDTH + BAR_GAP);
  }
};

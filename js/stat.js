'use strict';

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, .7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);

  var barPositionX = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], barPositionX, 260);

    var barColor = names[i] !== 'Вы' ? 'rgba(0, 0, 255, ' + Math.random() + ')' : 'rgba(255, 0, 0, 1)';

    ctx.fillStyle = barColor;
    ctx.fillRect(barPositionX, 240, BAR_WIDTH, -70);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.round(times[i]), barPositionX, 110);

    barPositionX += (BAR_WIDTH + BAR_GAP);
  }
};

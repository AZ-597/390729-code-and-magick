'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;

var getRandom = function(min, max) {
  return (Math.random() * (max - min) + min);
};

var getMaxResult = function(array) {
  var maxResult = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxResult) {
      maxResult = array[i];
    }
  }
  return maxResult;
};


var renderStatistics = function (ctx, names, times) {
  // Рисуем тень белого облака
  ctx.fillStyle = 'rgba(0, 0, 0, .7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
  // Рисуем белое облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  // Рисуем заголовок
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);
  ctx.strokeText('Ура вы победили!', 120, 45);
  ctx.strokeText('Список результатов:', 120, 65);
  // Точка отсчёта для столбиков диаграммы
  var barPositionX = 150;
  // Находим максимальный результат
  var maxResult = getMaxResult(times);
  // Перебираем победителей, рисуем статистику игроков
  for (var i = 0; i < names.length; i++) {
    // Рисуем имена
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], barPositionX, 260);
    ctx.strokeText(names[i], barPositionX, 260);
    // Определем цвет столбика
    var barColor = names[i] !== 'Вы' ? 'rgba(0, 0, 255, ' + getRandom(1, 0.4) + ')' : 'rgba(255, 0, 0, 1)';
    // Вычисляем высоту столбика
    var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxResult;
    // Рисуем столбик
    ctx.fillStyle = barColor;
    ctx.fillRect(barPositionX, 240, BAR_WIDTH, -1 * barHeight);
    // Рисуем очки
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.round(times[i]), barPositionX, 240 - barHeight - 5);
    ctx.strokeText(Math.round(times[i]), barPositionX, 240 - barHeight - 5);

    barPositionX += (BAR_WIDTH + BAR_GAP);
  }
};

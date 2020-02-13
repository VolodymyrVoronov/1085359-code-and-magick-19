'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200,
  };
  var TIMEOUT_IN_MS = 10000;

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.save = function (form, onLoad, onError) {
    var oReq = new XMLHttpRequest();
    var oData = new FormData(form);

    oReq.addEventListener('load', function () {
      if (oReq.status === StatusCode.OK) {
        onLoad(oReq.response);
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: green;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = 'Данные успешно отправлены!';
        document.body.insertAdjacentElement('afterbegin', node);
      } else {
        onError('Статус ответа: ' + oReq.status + ' ' + oReq.statusText);
      }
    });

    oReq.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    oReq.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + oReq.timeout + 'мс');
    });

    oReq.timeout = TIMEOUT_IN_MS;
    oReq.open('POST', 'https://js.dump.academy/code-and-magick', true);
    oReq.send(oData);
  };
})();

'use strict';

(function () {
  
  var userInfo = document.querySelector('.setup');
  var userInfoHandler = userInfo.querySelector('.upload');

  userInfoHandler.addEventListener('mousedown', function (e) {
    e.preventDefault();

    var startCoordinates = {
      x: e.clientX,
      y: e.clientY
    };

    var isDragged = false;

    function onMouseMove(me) {
      me.preventDefault();
      isDragged = true;
      
      var move = {
        x: startCoordinates.x - me.clientX,
        y: startCoordinates.y - me.clientY
      };

      startCoordinates = {
        x: me.clientX,
        y: me.clientY
      };

      userInfo.style.top = (userInfo.offsetTop - move.y) + 'px';
      userInfo.style.left = (userInfo.offsetLeft - move.x) + 'px';
    };

    function onMouseUp(ue) {
      ue.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        function onClickPreventDefault(ce) {
          ce.preventDefault();
          userInfoHandler.removeEventListener('click', onClickPreventDefault);
        };
        userInfoHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();


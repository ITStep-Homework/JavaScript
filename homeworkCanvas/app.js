const app = angular.module('catchTheBallApp', []);

app.controller('GameController', function($scope) {
    const vm = this;

    vm.canvas = document.getElementById('gameCanvas');
    vm.ctx = vm.canvas.getContext('2d');
    vm.startButton = document.getElementById('startButton');

    vm.canvasWidth = vm.canvas.width;
    vm.canvasHeight = vm.canvas.height;

    vm.basket = {
        x: vm.canvasWidth / 2 - 50,
        y: vm.canvasHeight - 30,
        width: 100,
        height: 20,
        dx: 20
    };

    vm.ball = {
        x: Math.random() * (vm.canvasWidth - 20),
        y: 0,
        radius: 10,
        dy: 2
    };

    vm.score = 0;
    vm.lives = 3;
    vm.gameRunning = false;

    vm.drawBasket = function() {
        vm.ctx.fillStyle = '#0095DD';
        vm.ctx.fillRect(vm.basket.x, vm.basket.y, vm.basket.width, vm.basket.height);
    };

    vm.drawBall = function() {
        vm.ctx.beginPath();
        vm.ctx.arc(vm.ball.x, vm.ball.y, vm.ball.radius, 0, Math.PI * 2);
        vm.ctx.fillStyle = '#0095DD';
        vm.ctx.fill();
        vm.ctx.closePath();
    };

    vm.drawScore = function() {
        vm.ctx.font = '16px Arial';
        vm.ctx.fillStyle = '#0095DD';
        vm.ctx.fillText('Счёт: ' + vm.score, 8, 20);
    };

    vm.drawLives = function() {
        vm.ctx.font = '16px Arial';
        vm.ctx.fillStyle = '#0095DD';
        vm.ctx.fillText('Жизни: ' + vm.lives, vm.canvasWidth - 65, 20);
    };

    vm.moveBasket = function() {
        document.addEventListener('keydown', (e) => {
            if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'ф') && vm.basket.x > 0) {
                vm.basket.x -= vm.basket.dx;
            } else if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'в') && vm.basket.x + vm.basket.width < vm.canvasWidth) {
                vm.basket.x += vm.basket.dx;
            }
        });
    };

    vm.updateBall = function() {
        vm.ball.y += vm.ball.dy;

        if (vm.ball.y + vm.ball.radius > vm.canvasHeight) {
            if (vm.ball.x > vm.basket.x && vm.ball.x < vm.basket.x + vm.basket.width) {
                vm.score++;
                vm.ball.dy += 0.2;
            } else {
                vm.lives--;
                if (vm.lives === 0) {
                    alert('Игра окончена! Ваш счёт: ' + vm.score);
                    vm.gameRunning = false;
                    vm.startButton.style.display = 'block';
                    return;
                }
            }
            vm.ball.x = Math.random() * (vm.canvasWidth - 20);
            vm.ball.y = 0;
        }
    };

    vm.draw = function() {
        if (!vm.gameRunning) return;
        vm.ctx.clearRect(0, 0, vm.canvasWidth, vm.canvasHeight);
        vm.drawBasket();
        vm.drawBall();
        vm.drawScore();
        vm.drawLives();
        vm.updateBall();
        requestAnimationFrame(vm.draw);
    };

    vm.startGame = function() {
        vm.score = 0;
        vm.lives = 3;
        vm.ball.dy = 2;
        vm.basket.x = vm.canvasWidth / 2 - 50;
        vm.ball.x = Math.random() * (vm.canvasWidth - 20);
        vm.ball.y = 0;
        vm.gameRunning = true;
        vm.startButton.style.display = 'none';
        vm.draw();
    };

    vm.moveBasket();
});
(function () {
	'use strict';

	var sequence = document.querySelector('.product-scroll-animation');

	if (!sequence) {
		return;
	}

	var canvas = sequence.querySelector('canvas');
	var context = canvas.getContext('2d');
	var frameCount = 91;
	var frames = [];
	var currentFrame = -1;
	var frameRequest = null;

	function framePath(index) {
		return 'images/animation/' + String(index).padStart(4, '0') + '.jpg';
	}

	function drawFrame(index) {
		var image = frames[index];

		if (!image || !image.complete) {
			return;
		}

		if (canvas.width !== image.naturalWidth || canvas.height !== image.naturalHeight) {
			canvas.width = image.naturalWidth;
			canvas.height = image.naturalHeight;
		}

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(image, 0, 0);
		currentFrame = index;
	}

	function updateFrame() {
		frameRequest = null;

		var isMobile = window.matchMedia('(max-width: 736px)').matches;
		var bounds = sequence.getBoundingClientRect();
		var scrollDistance = Math.max(1, bounds.height - window.innerHeight);
		var progress = 0;

		if (isMobile) {
			var sectionTop = sequence.offsetTop;
			var scrollProgress = (window.pageYOffset - sectionTop) / Math.max(1, sequence.offsetHeight - window.innerHeight);
			progress = Math.max(0, Math.min(1, scrollProgress));
		} else {
			progress = scrollDistance > 0 ? -bounds.top / scrollDistance : 0;
		}

		var frameIndex = Math.max(0, Math.min(frameCount - 1, Math.floor(progress * frameCount)));

		if (frameIndex !== currentFrame) {
			drawFrame(frameIndex);
		}
	}

	function requestFrameUpdate() {
		if (!frameRequest) {
			frameRequest = window.requestAnimationFrame(updateFrame);
		}
	}

	for (var index = 0; index < frameCount; index += 1) {
		frames[index] = new Image();
		frames[index].src = framePath(index + 1+3);
		frames[index].addEventListener('load', function () {
			if (currentFrame === -1) {
				drawFrame(0);
			}
		});
	}

	window.addEventListener('scroll', requestFrameUpdate, { passive: true });
	window.addEventListener('resize', requestFrameUpdate, { passive: true });
	window.addEventListener('orientationchange', requestFrameUpdate, { passive: true });
	requestFrameUpdate();
}());
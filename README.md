https://gist.github.com/crtr0/2896891
x https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
https://www.sitepoint.com/replace-redux-react-hooks-context-api/

https://github.com/crossbario/autobahn-js

You still have to manually add the package to your package.json - try npm install --save eslint-config-airbnb
https://github.com/airbnb/javascript/issues/465

комнаты
subscription https://github.com/crossbario/autobahn-js/blob/master/doc/reference.md

[x] Remove Scrollbar
[] FPS https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[] Может ли происходить разделение по комнатам через namespace'ы?
[] WS Service class
[x] Game Class
[] Arcanoid Physics
https://jvm-gaming.org/t/many-questions-arkanoid-ball-physics/16402
https://www.gamedev.net/forums/topic/372965-arkanoid-physics/
You will want to use velocity in you collision response code. 
For instance, you probably use the velocity of the ball when it collides with the paddle to "bounce off" realistically right? 
Doing that, you are assuming that the paddle is at rest at every collision (even if it isn't, your collision code thinks it it). 
If you use the velocity vectors of both the paddle and the ball to determine the "bounce" vector of the ball when it collides. 
Doing this, the "bounce" will even be different depending on how fast the paddle is moving in a certain direction. 
You could even get creative and add a "friction" element to the paddle, so you could control how strong the paddle affects the ball's "bounce". 
Maybe a sticky or slippery powerup or something.
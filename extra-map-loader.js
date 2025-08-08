// I will use this for testing maps to push to the map array without breaking the game (fingers crossed lol)

MAPS.push({
  id:'marsh', name:'Misty Marsh', desc:'Slower enemy movement, but more paths.',
  bgTiles: ['#486a5b','#415e50'],
  roadColor:'rgba(60,90,60,0.6)',
  spawnPoints:[ {x:-80,y:GRID.tile*3+20}, {x:-80,y:GRID.tile*6+20} ],
  goals:[ {x:GRID.tile*GRID.cols + 80, y: GRID.tile*4 + 60} ],
  waypoints:[
    [{x:-80,y:GRID.tile*3+20},{x:220,y:GRID.tile*3+20},{x:520,y:GRID.tile*4+20},{x:920,y:GRID.tile*5+20},{x:GRID.tile*GRID.cols+80,y:GRID.tile*4+60}],
    [{x:-80,y:GRID.tile*6+20},{x:180,y:GRID.tile*7+20},{x:480,y:GRID.tile*5+20},{x:920,y:GRID.tile*5+20},{x:GRID.tile*GRID.cols+80,y:GRID.tile*4+60}]
  ],
  waves:[
    [{t:ENEMIES.goblin,c:10}],
    [{t:ENEMIES.goblin,c:16},{t:ENEMIES.orc,c:2}],
    [{t:ENEMIES.shield,c:3},{t:ENEMIES.goblin,c:14}],
    [{t:ENEMIES.wyvern,c:3},{t:ENEMIES.orc,c:6}],
    [{t:ENEMIES.necro,c:2},{t:ENEMIES.goblin,c:10}],
    [{t:ENEMIES.troll,c:1}],
    [{t:ENEMIES.orc,c:12},{t:ENEMIES.shield,c:6}],
    [{t:ENEMIES.necro,c:3},{t:ENEMIES.drake,c:1}],
    [{t:ENEMIES.drake,c:3},{t:ENEMIES.orc,c:8}],
    [{t:ENEMIES.wyrm_boss,c:1}]
  ]
});

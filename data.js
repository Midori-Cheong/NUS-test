var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.3088852356019736,
        "pitch": -0.2957048117810146,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": -1.3088616793020016,
          "pitch": -0.2956812554810426,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.47568022747600125,
          "pitch": -0.22792720866321758,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.5832943356206144,
        "pitch": -0.20278441626663835,
        "fov": 0.7735553485412351
      },
      "linkHotspots": [
        {
          "yaw": -1.5832943356206144,
          "pitch": -0.20278441626663835,
          "rotation": 0,
          "target": "2-along-engineering-drive-1"
        },
        {
          "yaw": -2.384043529964975,
          "pitch": -0.1375156837334739,
          "rotation": 0,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.519259931026376,
          "pitch": 0.24444025863627417,
          "title": "cafe",
          "text": "take a rest for coffee"
        }
      ]
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.29599314109772124,
        "pitch": -0.017040160422876482,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 0.2667822066518255,
          "pitch": -0.3693206768414363,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": 0.936717763594217,
          "pitch": -0.022794411034332995,
          "rotation": 1.5707963267948966,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

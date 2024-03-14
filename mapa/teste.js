[
    {
        "id": "5dbb5733360c0070",
        "type": "tab",
        "label": "Fluxo 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "6a58a92bada36091",
        "type": "worldmap",
        "z": "5dbb5733360c0070",
        "name": "",
        "lat": "-21.937187",
        "lon": " -50.180648",
        "zoom": "16",
        "layer": "EsriS",
        "cluster": "0",
        "maxage": "",
        "usermenu": "show",
        "layers": "show",
        "panit": "false",
        "panlock": "false",
        "zoomlock": "false",
        "hiderightclick": "false",
        "coords": "deg",
        "showgrid": "false",
        "showruler": "false",
        "allowFileDrop": "false",
        "path": "/worldmap",
        "overlist": "DR,CO,RA,DN",
        "maplist": "OSMG,OSMC,EsriC,EsriS,UKOS",
        "mapname": "",
        "mapurl": "",
        "mapopt": "",
        "mapwms": false,
        "x": 580,
        "y": 240,
        "wires": []
    },
    {
        "id": "a872eb589b04bc6b",
        "type": "function",
        "z": "5dbb5733360c0070",
        "name": "function 2",
        "func": "msg.payload = {\n    lat: -21.937313,\n    lon: -50.180719,\n    name: \"HELICOVERPA\",\n    icon: \"default\",\n    iconColor: \"red\",\n    photoUrl: \"https://i.imgur.com/yhlwwZw.png\",\n    ttl: 0, \n};\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 240,
        "wires": [
            [
                "6a58a92bada36091"
            ]
        ]
    },
    {
        "id": "40984bd175fe7779",
        "type": "ui_worldmap",
        "z": "5dbb5733360c0070",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "lat": "",
        "lon": "",
        "zoom": "",
        "layer": "",
        "cluster": "",
        "maxage": "",
        "usermenu": "hide",
        "layers": "hide",
        "panit": "false",
        "panlock": "false",
        "zoomlock": "false",
        "hiderightclick": "true",
        "coords": "false",
        "showgrid": "false",
        "showruler": "false",
        "allowFileDrop": "false",
        "path": "/worldmap",
        "overlist": "DR,CO,RA,DN,HM",
        "maplist": "OSMG,OSMC,EsriC,EsriS,EsriT,EsriDG,UKOS",
        "mapname": "",
        "mapurl": "",
        "mapopt": "",
        "mapwms": false,
        "x": 740,
        "y": 240,
        "wires": []
    },
    {
        "id": "5f5d89cfc0b772f4",
        "type": "inject",
        "z": "5dbb5733360c0070",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "10",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 240,
        "wires": [
            [
                "a872eb589b04bc6b"
            ]
        ]
    }
]
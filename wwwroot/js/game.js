var engine;

export function init(element, dotNetObject){
    ////// Here, we initialize the pixi application
    var pixiRoot = new PIXI.Application(1920, 1080, { backgroundColor : 0x6BACDE });

    // add the renderer view element to the DOM
    element.appendChild(pixiRoot.view);
    
    // engine-instance configuration object
    var instanceConfig = {
        mapDataPath: "assets/mapData.json", // the path to the json file that defines map data, required
        assetsToLoad: ["assets/assets_map.json", "assets/assets_characters.json"],
        engineInstanceReadyCallback : function(){
            dotNetObject.invokeMethodAsync("gameRender", true)
        }
    };

    engine = TRAVISO.getEngineInstance(instanceConfig);
    pixiRoot.stage.addChild(engine);
}

export function zoomIn(){
    if(engine){
        engine.zoomIn();
    }
}

export function zoomOut(){
    if(engine){
        engine.zoomOut();
    }
}

export function center(){
    if(engine){
        engine.centralizeToCurrentExternalCenter();
    }
}

export function centerObject(){
    if(engine){
        engine.centralizeToObject(engine.getCurrentControllable());
    }
}

export function focus(){
    if(engine){
        engine.focusMapToObject(engine.getCurrentControllable());
    }
}
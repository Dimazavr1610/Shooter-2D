gdjs._1082_1086_1085_1077_1094Code = {};
gdjs._1082_1086_1085_1077_1094Code.localVariables = [];
gdjs._1082_1086_1085_1077_1094Code.idToCallbackMap = new Map();
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2= [];
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects2= [];
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects2= [];


gdjs._1082_1086_1085_1077_1094Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FINALSCORw"), gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1[i].getBehavior("Text").setText("Finalscore: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1[k] = gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "GameOver.mp3", 2, false, 30, gdjs.randomFloatInRange(0.9, 1.1));
}
}

}


};

gdjs._1082_1086_1085_1077_1094Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects2.length = 0;

gdjs._1082_1086_1085_1077_1094Code.eventsList0(runtimeScene);
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDFINALSCORwObjects2.length = 0;


return;

}

gdjs['_1082_1086_1085_1077_1094Code'] = gdjs._1082_1086_1085_1077_1094Code;

gdjs._1053_1072_1095_1072_1083_1086Code = {};
gdjs._1053_1072_1095_1072_1083_1086Code.localVariables = [];
gdjs._1053_1072_1095_1072_1083_1086Code.idToCallbackMap = new Map();
gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects1= [];
gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects2= [];
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1= [];
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects2= [];
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1= [];
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2= [];


gdjs._1053_1072_1095_1072_1083_1086Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "menu.mp3", true, 50, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Unnamed"), gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1.length;i<l;++i) {
    if ( gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1[k] = gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1[i];
        ++k;
    }
}
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


};

gdjs._1053_1072_1095_1072_1083_1086Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects2.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects2.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;

gdjs._1053_1072_1095_1072_1083_1086Code.eventsList0(runtimeScene);
gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNotJamThirdDimension15Objects2.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDUnnamedObjects2.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1053_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_1053_1072_1095_1072_1083_1086Code'] = gdjs._1053_1072_1095_1072_1083_1086Code;

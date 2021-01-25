// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "esztergom-layama0000", a: "C_L_01", p: new BABYLON.Vector3(-159.227, 160.05, -96.158), l: new BABYLON.Vector3(-160.227, 160.05, -96.1713)});
   layamaCameras.push({n: "esztergom-layama0001", a: "C_L_002", p: new BABYLON.Vector3(-186.307, 160.05, -280.207), l: new BABYLON.Vector3(-187.307, 160.05, -280.221)});
   layamaCameras.push({n: "esztergom-layama0002", a: "C_L_003", p: new BABYLON.Vector3(-476.45, 160.05, -123.067), l: new BABYLON.Vector3(-477.45, 160.05, -123.08)});
   layamaCameras.push({n: "esztergom-layama0003", a: "C_L_004", p: new BABYLON.Vector3(-755.554, 160.05, -154.736), l: new BABYLON.Vector3(-756.554, 160.05, -154.749)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}


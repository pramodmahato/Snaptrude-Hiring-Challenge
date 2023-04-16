import * as BABYLON from "babylonjs";
import { useEffect } from "react";

function Cuboid({ screenshotUrl }) {

    useEffect(() => {

        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);
        var scene = new BABYLON.Scene(engine);

        var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0.4, 0), scene);

        var parent = new BABYLON.TransformNode("parent", scene);

        var cuboid = BABYLON.MeshBuilder.CreateBox("cuboid", { size: 3 }, scene);

        cuboid.parent = parent;

        var material = new BABYLON.StandardMaterial("material", scene);
        const texture = new BABYLON.Texture(screenshotUrl, scene);
        material.diffuseTexture = texture;
        cuboid.material = material;

        cuboid.material = material;

        material.diffuseTexture = texture;

        cuboid.position = new BABYLON.Vector3(0, 0, 0);
        cuboid.rotation = new BABYLON.Vector3(1, 1, 1);
        cuboid.scaling = new BABYLON.Vector3(1, 1, 1);

        var rotationBehavior = new BABYLON.PointerDragBehavior({ dragAxis: new BABYLON.Vector3(0, 1, 0) });
        parent.addBehavior(rotationBehavior);

        rotationBehavior.onDragObservable.add(function (eventData) {
            parent.rotation.y += eventData.delta.x / 100;
        });

        // Start the BabylonJS engine
        engine.runRenderLoop(function () {
            scene.render();
        });

    })

    return (<div >
        <canvas id="renderCanvas" />
    </div>)
}

export default Cuboid;
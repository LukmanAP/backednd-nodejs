async function loadModel() {
    const model = await tf.loadLayerModel('model/model.json');
    model.predict()
}
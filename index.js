import 'bootstrap/dist/css/bootstrap.css';
import * as tf from '@tensorflow/tfjs';

// define a machine learning model for liner regression
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Specify loss and optimizer for model
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Prepare training data
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// Train the model
model.fit(xs, ys, {epochs: 500}).then(() => {
    // Use model to predict valuse
    
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
});

// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', () => {
        var val = document.getElementById('inputValue').value;
        console.log("input:" + val)
        document.getElementById("output").innerText = model.predict(tf.tensor2d([Number(val)], [1,1]));
        model.predict(tf.tensor2d([Number(val)], [1,1])).print(); //console
})

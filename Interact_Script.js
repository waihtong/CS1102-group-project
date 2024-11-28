function update_Slider_Value(slider) {
    var valueDisplay;
    if (slider.id === 'layersSlider') {
        valueDisplay = document.getElementById('layersValue');
    } else {
        valueDisplay = document.getElementById('dataSizeValue');
    }
    valueDisplay.innerText = slider.value;
}


function level_Detect(value) {
    if (value <= 33) {
        return 'low';
    } else if (value <= 66) {
        return 'medium';
    } else {
        return 'high';
    }
}


function output_generate() {
    var loader = document.getElementById('loadingSpinner');
    var outputTextArea = document.getElementById('outputText');
    loader.style.display = 'block';
    outputTextArea.style.display = 'none';
    setTimeout(function () {
        var layersLevel = level_Detect(document.getElementById('layersSlider').value);
        var dataSizeLevel = level_Detect(document.getElementById('dataSizeSlider').value);
        //The output content is generate by LLM for real experience
        var presetOutputs = {
            'low': {
                'low': "Computer science is study of computers.",
                'medium': "Computer science is the study of computers and software.",
                'high': "Computer science is the field that studies computers, software, and how they work."
            },
            'medium': {
                'low': "Computer science is a field of study that focuses on the operation of computers and their software",
                'medium': "Computer science is a scientific discipline that involves the study of computers and programming languages, focusing on algorithms, data structures, and the principles of software applications.",
                'high': "Computer science is the systematic study of algorithmic processes that describe and transform information: the theory, analysis, design, efficiency, implementation, and application of these processes."
            },
            'high': {
                'low': "Computer science is the study of how computers work, mainly focusing on software, programming languages, and data processing.",
                'medium': "Computer science is a comprehensive field that encompasses the study of computation, computer technology, and the impact of systems on society, focusing extensively on software systems and algorithms.",
                'high': "Computer science is an extensive discipline that studies the theoretical foundations of information and computation, applying these elements through systematic study to the implementation of computer systems. The field encompasses a variety of topics from software applications to algorithmic challenges, operating systems, and explores the practical, scientific, and theoretical approach to computation and its applications."
            }
        };
        outputTextArea.innerText = presetOutputs[layersLevel][dataSizeLevel];
        loader.style.display = 'none';
        outputTextArea.style.display = 'block';
    }, 700);
}

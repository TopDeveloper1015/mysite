# jamit-audio-recorder 
Nice little Audio Recorder for Vue

## Demo
[Vue Audio-Recorder](https://www.jamit.ba/vue/jamit-audio-recorder/)

##Install
```
npm i --save jamit-audio-recorder
```

##Example
```vue
<template>
  <div>
    <AudioRecorder
    :timer="true"
    timer-color="#333"
    :timer-font-size="1.2"
    timer-background="#eee"
    :audio-width="200"
    @audioFile="myAudioFile"
    />
  </div>
</template>

<script>
  import AudioRecorder from 'jamit-audio-recorder';

  export default {
  name: 'App',
  components: {
  AudioRecorder,
},
  methods: {
  myAudioFile(audioFile) {
  console.log('myAudioFile: ', audioFile);
},
},
};
</script>


```


### Properties

* *timer : true/false*  (Boolean, Show timer)
* *timer-color = #333* - (String, Hexadecimal value for the timer text color)
* *timer-font-size = 1* - (Number, Timer font size in em)
* *timer-background = #eee* (String, Hexadecimal value for the timer background color)
* *audio-width = 200* (Number, Audio control width in pixel)
* *audioFile="myAudioFile"* (Function, Callbackfunction to receive the Audio BLOB file)


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

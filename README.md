# frontend-test
In this project I developed a PWA with ReactJS. deployed [here](https://taraabarnettest.netlify.app/). (For some features, it's better to use VPN.)
## tools
For database and fake REST APIs I used <b>mockapi.io</b>. I gave some images with additional information from it. In the app we can delete data but because the data that mockapi gives us differ every time, we can understand the correctness of our delete from db action from the decrease in the number of images.<br/>
I used <b>Redux</b> for my store. However due to project's scale and Redux overload it was better solution to use React in-built context for this project, but I used Redux-toolkit to show my dominance on this tool.<br/>
Also for the project, some End-to-End test is written with <b>cypress</b>.<br/>
Some other tools that I used in this project are: bootstrap, toast, axios, ... .

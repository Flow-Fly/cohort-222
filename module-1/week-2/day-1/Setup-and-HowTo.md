# Executing a JS file

## Programs check

To execute a JavaScript file in your computer, you are going to need [Node](https://nodejs.org/en/).

You should have already installed it during the pre-work, but if you want to be sure it is installed, run this command in your terminal:

`node -v`

If you see `v16.14.0` or any other number above `v12`, you should be good!

## Setup

<img src="https://miro.medium.com/max/1400/1*MtjDRyv18sqU5bd5sm5FcQ.png" width=600 alt="cat-vador">

You should create a `ironhack` folder in your computer. It should contain atleast two folders:

- a `my-code` folder where you will organize all of your code.
  An example of structure would be like so :

    <img src="https://i.imgur.com/KuolfDS.png" alt="file structure" height=400>

  This might take some time to type, so let's maybe make it programatically.

  Go into `my-code` folder using your terminal.

  If you're using Windows, please be sure to use `Git Bash` as your terminal.

  Once in, type this command: `mkdir -p module-{1,2,3}/week-{1,2,3,4,5}/{day-{1,2,3},labs}`

  This will create all the necessary folders.

  - `-p` is a flag, it stands for "parents" and will allow you to create nested folders.
  - You could replace `{1,2,3,4,5}` by a range : `{1..5}`

- the cohort folder, don't create it manually !
  - Go to [this](https://github.com/Flow-Fly/cohort-222) repository and clone it in your `ironhack` folder.
  - **Don't fork it !**
  - This is where we will put the lessons written in VSCode, you will need to `git pull` the newly added code.

## Running JavaScript in your terminal

Running a JavaScript file is handy, you can see all the `console.log()` you wrote and can easily check your code is behaving.

To do so, you will just need to execute `node the/path/to-your-file.js` or just `node yourfile.js` if your terminal is in the same directory as the file.

-You will need to run the same command every time (We will see later how to ease the process), use the `UP-ARROW` of your keyboard to access the previously written command !

### Oopsies

So... You made a nice loop:

```js
for (let i = 0; i >= 0; i++) {
	console.log(i);
}
```

But when running your code, something is obviously going wrong !

- Hot to stop the execution of you code ? press `Ctrl + C` (You need to focus the terminal)

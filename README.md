# Simple-Finder
First of all, I would like to thank [GitHub Desktop](https://desktop.github.com/) and [Jeff Galbraith](https://medium.com/quasar-framework/building-an-electron-file-explorer-with-quasar-and-vue-7bf94f1bbf6).

This application is a basic function of file finder.   
The purpose of this application is to see the basic functions and possibilities of Electron through a relatively simple project.

I hope many people can learn the function of Electron easily through the source of this project.

![ex_screenshot1](https://github.com/seniya/electron-finder-normal/blob/main/desc_picture/finder_sample-pic-01.png?raw=true)

## Functions and Features
Top feature: Local System File Explorer (Windows 10 only)

- Moving drives and folders using the [TreeView Component](https://vuetifyjs.com/en/components/treeview/)
- Reactive sorting of contents
- Output meta information from images and music files
- Implementing Favorites for Folders
- Dynamic Application Layout

## Learning point
- You can learn about basic `electron` functions and the use of `vuejs`.
- You can learn folder and file navigation using `node FS` module.
- You can learn the `TreeView` UI function through recursive navigation.
- You can learn the synchronous and asynchronous functions of `ipcMain` and `ipcRender`.
- You can learn how to get meta information and images through `exifr` and `music-metadata`.
- You can learn how to use IndexedDB through the Favorites feature using `idb`.


## Development environment Summary
I started development with [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder). and ,
```
os: windows 10
node: 12.18.3
electron: ^9.0.0
vue: ^2.6.11
vuetify": ^2.2.11
eslint: ^6.7.2
```

## Installation
Download the latest release from the [releases page](https://github.com/seniya/electron-finder-normal) Or Clone git Repository.

```
// if you clone this git repository

npm install
npm run electron:serve  <-- DEV MODE
npm run electron:build  <-- BUILD MODE
```

### Thanks once again.
1. The main design of this application was brought from [GitHub Desktop](https://desktop.github.com/).
2. The basic idea of this application came from [Jeff Galbraith](https://medium.com/quasar-framework/building-an-electron-file-explorer-with-quasar-and-vue-7bf94f1bbf6).
3. Main Icon By <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a>


<!-- 
![ex_screenshot1](https://github.com/seniya/electron-finder-normal/blob/main/desc_picture/finder_sample_01.gif?raw=true)

![ex_screenshot1](https://github.com/seniya/electron-finder-normal/blob/main/desc_picture/finder_sample_02.gif?raw=true)

![ex_screenshot1](https://github.com/seniya/electron-finder-normal/blob/main/desc_picture/finder_sample_03.gif?raw=true) -->




# React SSR dengan EXPRESS Handlebars

Okay kali ini kita akan memcoba membuat sebuah SSR untuk project react kita.

## 1 Install dependencies yang dibutuhkan

```bash
yarn install
```

## 2 Build project

```bash
yarn build
```

## 3 Copy syntax dari build/index.html

CUT syntax bagian atas, dari <HTML> sampai pembuka body, dan dari 2 script bagian bawah, sampai penutup body, dan paste ke file bernama layouts/main.html. tambahkan template sintax `{{{body}}}` pada body html file tersebut.

## 4 Rename file build/index.html menjadi main.html

Silakan rename file index.html menjadi main.html

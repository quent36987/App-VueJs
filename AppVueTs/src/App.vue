<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
    #app {
        --cell-highlight: rgba(200, 210, 197, 0.3);
        --red: #ff3333;
        --green: #30570b;
        --black: black;
        --cell-hover: #2df317;
        --column: column;
        --row: row;

        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
    }
</style>

<template>
    <h1>{{ msg }}</h1>
    <button @click="mensaje('hola')">Click me</button>
</template>

<script setup>

    const msg = 'Hellos'

    const mensaje = (mensaje) => {
        console.log(mensaje)
    }

</script>
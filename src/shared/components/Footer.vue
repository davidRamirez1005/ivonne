<template>
    <footer>
        <p><span> Copyright © {{new Date().getFullYear()}}</span> created by <span class="nombre"><a href="https://jose-david-ramirez.vercel.app/" target="_blank" rel="noopener noreferrer">David Ramirez</a>😸</span> </p>
    </footer>
    </template>
    
    <script setup>
    
    </script>
    
    <style scoped>
        p{
            font-size: 0.9rem;
            font-weight: bold;
        }
        footer{
            display : flex;
            justify-content : center ;
            align-items : center;
            height : 3vh;
            width: 100%;
            background-color: #393E46;
            color: aliceblue;
        }
        .nombre{
            color: #00ADB5;
        }
        @media screen and (max-width: 710px) {
            p{
                font-size: 0.7rem;
            }
        }
    </style>
    
<template>
<div class="contenedor-footer">
    <div class="cont-barras">
        <img class="barras-1" src="../../assets/img/barras.png" alt="barras">
    </div>
    <div class="cont-barras">
        <img class="barras-2" src="../../assets/img/barras.png" alt="barras">
    </div>
    <div class="row">
        <div class="col-11">
            <h2 class="text-end text-2xl font-semibold">!CONTACTANOS!</h2>
        </div>
    </div>
    <div class="row">
        <div class="col info">
            <div class="row">
                <h2 class="text-2xl font-normal">Contacto:</h2>
            </div>
            <div class="row">
                <p><i class="fas fa-phone"></i> +57 3154665780</p>
            </div>
            <div class="row">
                <p><i class="fas fa-envelope"></i> ivonnemaritzaruedacristancho@gmail.com</p>
            </div>
            <div class="row">
                <p><i class="fas fa-map-marker-alt"></i> Bucaramanga-Santander</p>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <h2 class="text-2xl font-normal">Redes Sociales:</h2>
            </div>
            <div class="row">
                <p><i class="fab fa-facebook"></i> Facebook</p>
            </div>
            <div class="row">
                <p><i class="fab fa-instagram"></i> Instagram</p>
            </div>
            <div class="row">
                <p><i class="fab fa-linkedin"></i> LinkedIn</p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.contenedor-footer{
    background-color: #F5F7FA;
    color: rgb(17, 16, 16);
    padding: 3rem;
    border-radius: 100px;
}
.row{
    margin-bottom: 1rem;
}
.info{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
}
i{
    color: #6D9886;
    margin-right: 3px;
    font-size: 20px;
}
p{
    cursor: default;
}
p:hover{
    color: #6D9886;
    font-size: 17px;
}
.cont-barras{
    display: flex;
    position: absolute;
}
.barras-1{
    width: 20vw;
    margin-left: -3rem;
    margin-top: -4rem;
}
.barras-2{
    width: 15vw;
    margin-left: 70rem;
    margin-top: 4rem;
}
@media (max-width: 800px){
    .barras-1{
    width: 20vw;
    margin-left: 1rem;
    margin-top: -1rem;
}
.barras-2{
    width: 35vw;
    margin-left: 10rem;
    margin-top: 20rem;
}
}
</style>

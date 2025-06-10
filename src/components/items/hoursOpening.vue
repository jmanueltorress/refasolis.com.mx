<template>
    <div class="horario-container">
        <!-- Encabezado -->
        <div class="horario-header">
            HORARIOS DE ATENCION
        </div>

        <!-- Contenido -->
        <div class="horario-content">
            <!-- Icono del reloj -->
            <div class="horario-icono">
                <img src="/images/home-imgs/hours-opening/clock.png" alt="Reloj" />
            </div>

            <!-- Texto de horarios -->
            <div class="horario-texto">
                <div class="dia-bloque">
                    <p class="dia-titulo">Lunes a Viernes</p>
                    <p class="hora">9 am - 6:30 pm</p>
                </div>
                <div class="dia-fila">
                    <div class="dia-bloque">
                        <p class="dia-titulo">Sábado</p>
                        <p class="hora">9:30 am - 4:00 pm</p>
                    </div>
                    <div class="dia-bloque">
                        <p class="dia-titulo">Domingo</p>
                        <p class="hora">9:30 am - 3:30 pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Asegúrate de que la imagen esté en la ruta correcta o reemplázala por un ícono en línea si prefieres.
</script>

<style scoped>
.horario-container {
    max-width: 1200px;
    width: 95%;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 10% auto 5%;
    /* border: 0.5px solid var(--red-brand); */
    border-radius: 0;
    padding: 1rem;
    font-family: sans-serif;
    box-shadow: 0 0 8px rgb(255, 255, 255);
}

.horario-header {
    background-color: black;
    color: white;
    text-align: center;
    font-weight: bold;
    padding: 10px;
}

.horario-content {
    display: flex;
    padding: 16px;
    align-items: center;
    background: white;
    justify-content: center;
    align-items: center;
}

.horario-icono {
    margin-right: 16px;
    flex-shrink: 0;
}

.horario-icono img {
    width: 120px;
    height: 120px;
}

.horario-texto {
    font-size: 14px;
    color: black;
}

.dia-bloque {
    margin-bottom: 12px;
}

.dia-fila {
    display: flex;
    gap: 32px;
}

.dia-titulo {
    font-weight: bold;
    margin-bottom: 4px;
}

.hora {
    margin: 0;
}
</style>

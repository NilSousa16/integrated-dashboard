import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

socket.emit("start", "Send message start service monitoring");

// --- Tecnocentro
socket.on('temperature-virtual_tecnocentro', (arg) => {
  console.log('Print client side...temperature-virtual_tecnocentro: ', arg)
});

socket.on('humidity-virtual_tecnocentro', (arg) => {
  console.log('Print client side...humidity-virtual_tecnocentro: ', arg)
});

socket.on('flameDetected-virtual_tecnocentro', (arg) => {
  console.log('Print client side...flameDetected-virtual_tecnocentro: ', arg)
});
// ---
socket.on('temperature-real_tecnocentro', (arg) => {
  console.log('Print client side...temperature-real_tecnocentro: ', arg)
});

socket.on('humidity-real_tecnocentro', (arg) => {
  console.log('Print client side...humidity-real_tecnocentro: ', arg)
});

socket.on('flameDetected-real_tecnocentro', (arg) => {
  console.log('Print client side...flameDetected-real_tecnocentro: ', arg)
});
// ---
socket.on('smartmeter-data_tecnocentro', (arg) => {
  console.log('>>>Print client side...smartmeter-data_tecnocentro: ', arg)
});
// --- Secti
socket.on('temperature-virtual_secti', (arg) => {
  console.log('Print client side...temperature-virtual_secti: ', arg)
});

socket.on('humidity-virtual_secti', (arg) => {
  console.log('Print client side...humidity-virtual_secti: ', arg)
});

socket.on('flameDetected-virtual_secti', (arg) => {
  console.log('Print client side...flameDetected-virtual_secti: ', arg)
});
// ---
socket.on('temperature-real_secti', (arg) => {
  console.log('Print client side...temperature-real_secti: ', arg)
});

socket.on('humidity-real_secti', (arg) => {
  console.log('Print client side...humidity-real_secti: ', arg)
});

socket.on('flameDetected-real_secti', (arg) => {
  console.log('Print client side...flameDetected-real_secti: ', arg)
});
// ---
socket.on('smartmeter-data_secti', (arg) => {
  console.log('>>>Print client side...smartmeter-data_secti: ', arg)
});

// --- Bonfim
socket.on('temperature-virtual_bonfim', (arg) => {
  console.log('Print client side...temperature-virtual_bonfim: ', arg)
});

socket.on('humidity-virtual_bonfim', (arg) => {
  console.log('Print client side...humidity-virtual_bonfim: ', arg)
});

socket.on('flameDetected-virtual_bonfim', (arg) => {
  console.log('Print client side...flameDetected-virtual_bonfim: ', arg)
});
// ---
socket.on('temperature-real_bonfim', (arg) => {
  console.log('Print client side...temperature-real_bonfim: ', arg)
});

socket.on('humidity-real_bonfim', (arg) => {
  console.log('Print client side...humidity-real_bonfim: ', arg)
});

socket.on('flameDetected-real_bonfim', (arg) => {
  console.log('Print client side...flameDetected-real_bonfim: ', arg)
});
// ---
socket.on('smartmeter-data_bonfim', (arg) => {
  console.log('>>>Print client side...smartmeter-data_bonfim: ', arg)
});

// --- Cajazeiras
socket.on('temperature-virtual_cajazeiras', (arg) => {
  console.log('Print client side...temperature-virtual_cajazeiras: ', arg)
});

socket.on('humidity-virtual_cajazeiras', (arg) => {
  console.log('Print client side...humidity-virtual_cajazeiras: ', arg)
});

socket.on('flameDetected-virtual_cajazeiras', (arg) => {
  console.log('Print client side...flameDetected-virtual_cajazeiras: ', arg)
});
// ---
socket.on('temperature-real_cajazeiras', (arg) => {
  console.log('Print client side...temperature-real_cajazeiras: ', arg)
});

socket.on('humidity-real_cajazeiras', (arg) => {
  console.log('Print client side...humidity-real_cajazeiras: ', arg)
});

socket.on('flameDetected-real_cajazeiras', (arg) => {
  console.log('Print client side...flameDetected-real_cajazeiras: ', arg)
});
// ---
socket.on('smartmeter-data_cajazeiras', (arg) => {
  console.log('>>>Print client side...smartmeter-data_cajazeiras: ', arg)
});
// Teste
socket.on('environment_change_windspeed', (arg) => {
  console.log('>>>Print client side...tenvironment_change_windspeed: ', arg)
});

socket.on('environment_change_weather', (arg) => {
  console.log('>>>Print client side...environment_change_weather: ', arg)
});

socket.on('environment_change_explosion', (arg) => {
  console.log('>>>Print client side...environment_change_explosion: ', arg)
});

socket.on('environment_change_lighting', (arg) => {
  console.log('>>>Print client side...environment_change_lighting: ', arg)
});

console.log('Executou script ....');
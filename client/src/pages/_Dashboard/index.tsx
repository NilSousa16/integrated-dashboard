import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/logoParque.png';

import { Header, Footer } from './styles';

import { io } from "socket.io-client";

import WeatherCard from '../../components/WeatherCard ';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const socket = io("http://localhost:8000");

const _Dashboard: React.FC = () => {
  
  // --- Tecnocentro
  const[temperatureVirtualTecnocentro, setTemperatureVirtualTecnocentro] = useState('')
  const[humidityVirtualTecnocentro, setHumidityVirtualTecnocentro] = useState('')
  const[flameDetectedVirtualTecnocentro, setFlameDetectedVirtualTecnocentro] = useState(false)
  const[temperatureRealTecnocentro, setTemperatureRealTecnocentro] = useState('')
  const[humidityRealTecnocentro, setHumidityRealTecnocentro] = useState('')
  const[flameDetectedRealTecnocentro, setFlameDetectedRealTecnocentro] = useState(false)

  // --- Secti
  const[temperatureVirtualSecti, setTemperatureVirtualSecti] = useState('')
  const[humidityVirtualSecti, setHumidityVirtualSecti] = useState('')
  const[flameDetectedVirtualSecti, setFlameDetectedVirtualSecti] = useState(false)
  const[temperatureRealSecti, setTemperatureRealSecti] = useState('')
  const[humidityRealSecti, setHumidityRealSecti] = useState('')
  const[flameDetectedRealSecti, setFlameDetectedRealSecti] = useState(false)

  // --- Bonfim
  const[temperatureVirtualBonfim, setTemperatureVirtualBonfim] = useState('')
  const[humidityVirtualBonfim, setHumidityVirtualBonfim] = useState('')
  const[flameDetectedVirtualBonfim, setFlameDetectedVirtualBonfim] = useState(false)
  const[temperatureRealBonfim, setTemperatureRealBonfim] = useState('')
  const[humidityRealBonfim, setHumidityRealBonfim] = useState('')
  const[flameDetectedRealBonfim, setFlameDetectedRealBonfim] = useState(false)

  // --- Cajazeiras
  const[temperatureVirtualCajazeiras, setTemperatureVirtualCajazeiras] = useState('')
  const[humidityVirtualCajazeiras, setHumidityVirtualCajazeiras] = useState('')
  const[flameDetectedVirtualCajazeiras, setFlameDetectedVirtualCajazeiras] = useState(false)
  const[temperatureRealCajazeiras, setTemperatureRealCajazeiras] = useState('')
  const[humidityRealCajazeiras, setHumidityRealCajazeiras] = useState('')
  const[flameDetectedRealCajazeiras, setFlameDetectedRealCajazeiras] = useState(false)

  useEffect(() => {
    socket.emit("start", "Send message start service monitoring")

    // --- Tecnocentro
    socket.on('temperature-virtual_tecnocentro', (arg) => {
      if(temperatureVirtualTecnocentro != arg || temperatureVirtualTecnocentro == '') {
        setTemperatureVirtualTecnocentro(arg)
      }       
    });  

    socket.on('humidity-virtual_tecnocentro', (arg) => {
      if (humidityVirtualTecnocentro != arg || humidityVirtualTecnocentro == '') {
        setHumidityVirtualTecnocentro(arg)
      }       
    });

    socket.on('flameDetected-virtual_tecnocentro', (arg) => {      
      if (flameDetectedVirtualTecnocentro != arg || flameDetectedVirtualTecnocentro == false) {
        setFlameDetectedVirtualTecnocentro(arg)
      }
    }); 
    // ---
    socket.on('temperature-real_tecnocentro', (arg) => {
      if (temperatureRealTecnocentro != arg) {
        setTemperatureRealTecnocentro(arg)
      }       
    });

    socket.on('humidity-real_tecnocentro', (arg) => {
      if (humidityRealTecnocentro != arg) {
        setHumidityRealTecnocentro(arg)
      }       
    });

    socket.on('flameDetected-real_tecnocentro', (arg) => {
      if (flameDetectedRealTecnocentro != arg) {
        setFlameDetectedRealTecnocentro(arg)
      }       
    });    

    // --- Secti
    socket.on('temperature-virtual_secti', (arg) => {
      if(temperatureVirtualSecti != arg || temperatureVirtualSecti == '') {
        setTemperatureVirtualSecti(arg)
      }      
    });

    socket.on('humidity-virtual_secti', (arg) => {
      if (humidityVirtualSecti != arg || humidityVirtualSecti == '') {
        setHumidityVirtualSecti(arg)
      }    
    });

    socket.on('flameDetected-virtual_secti', (arg) => {
      if (flameDetectedVirtualSecti != arg || flameDetectedVirtualSecti == false) {
        setFlameDetectedVirtualSecti(arg)
      }
    });
    // ---
    socket.on('temperature-real_secti', (arg) => {
      if(temperatureRealSecti != arg) {
        setTemperatureRealSecti(arg)
      }      
    });

    socket.on('humidity-real_secti', (arg) => {
      if (humidityRealSecti != arg) {
        setHumidityRealSecti(arg)
      }   
    });

    socket.on('flameDetected-real_secti', (arg) => {
      if (flameDetectedRealSecti != arg) {
        setFlameDetectedRealSecti(arg)
      }
    });

    // --- Bonfim
    socket.on('temperature-virtual_bonfim', (arg) => {
      if(temperatureVirtualBonfim != arg || temperatureVirtualBonfim == '') {
        setTemperatureVirtualBonfim(arg)
      }       
    });  

    socket.on('humidity-virtual_bonfim', (arg) => {
      if (humidityVirtualBonfim != arg || humidityVirtualBonfim == '') {
        setHumidityVirtualBonfim(arg)
      }       
    });

    socket.on('flameDetected-virtual_bonfim', (arg) => {      
      if (flameDetectedVirtualBonfim != arg || flameDetectedVirtualBonfim == false) {
        setFlameDetectedVirtualBonfim(arg)
      }
    }); 
    // ---
    socket.on('temperature-real_bonfim', (arg) => {
      if (temperatureRealBonfim != arg) {
        setTemperatureRealBonfim(arg)
      }       
    });

    socket.on('humidity-real_bonfim', (arg) => {
      if (humidityRealBonfim != arg) {
        setHumidityRealBonfim(arg)
      }       
    });

    socket.on('flameDetected-real_bonfim', (arg) => {
      if (flameDetectedRealBonfim != arg) {
        setFlameDetectedRealBonfim(arg)
      }       
    });  

    // --- Cajazeiras
    socket.on('temperature-virtual_cajazeiras', (arg) => {
      if(temperatureVirtualCajazeiras != arg || temperatureVirtualCajazeiras == '') {
        setTemperatureVirtualCajazeiras(arg)
      }      
    });

    socket.on('humidity-virtual_cajazeiras', (arg) => {
      if (humidityVirtualCajazeiras != arg || humidityVirtualCajazeiras == '') {
        setHumidityVirtualCajazeiras(arg)
      }    
    });

    socket.on('flameDetected-virtual_cajazeiras', (arg) => {
      if (flameDetectedVirtualCajazeiras != arg || flameDetectedVirtualCajazeiras == false) {
        setFlameDetectedVirtualCajazeiras(arg)
      }
    });
    // ---
    socket.on('temperature-real_cajazeiras', (arg) => {
      if(temperatureRealCajazeiras != arg) {
        setTemperatureRealCajazeiras(arg)
      }      
    });

    socket.on('humidity-real_cajazeiras', (arg) => {
      if (humidityRealCajazeiras != arg) {
        setHumidityRealCajazeiras(arg)
      }   
    });

    socket.on('flameDetected-real_cajazeiras', (arg) => {
      if (flameDetectedRealCajazeiras != arg) {
        setFlameDetectedRealCajazeiras(arg)
      }
    });

  }, []);
  
  return (
    <>
      <Header>
        <img src={logoImg} style={{maxWidth: "200px"}} alt="Living Lab" />
      </Header>

      <MDBContainer className="h-100">
        <MDBRow className="justify-content-left align-items-center h-100">

          {/* {Tecnocento} */}
          <WeatherCard 
            location={'Tecnocentro'}
            temperature={temperatureRealTecnocentro} 
            humidity={humidityRealTecnocentro}
            flameDetected={flameDetectedRealTecnocentro} />

          <WeatherCard 
            location={'Tecnocentro'}
            temperature={temperatureVirtualTecnocentro} 
            humidity={humidityVirtualTecnocentro}
            flameDetected={flameDetectedVirtualTecnocentro} />

          {/* {Secti} */}
          <WeatherCard 
            location={'Secti'}
            temperature={temperatureRealSecti} 
            humidity={humidityRealSecti}
            flameDetected={flameDetectedRealSecti} />

          <WeatherCard 
            location={'Secti'}
            temperature={temperatureVirtualSecti} 
            humidity={humidityVirtualSecti}
            flameDetected={flameDetectedVirtualSecti} />
    
          {/* {Bonfim} */}
          <WeatherCard 
            location={'Bonfim'}
            temperature={temperatureRealBonfim} 
            humidity={humidityRealBonfim}
            flameDetected={flameDetectedRealBonfim} />

          <WeatherCard 
            location={'Bonfim'}
            temperature={temperatureVirtualBonfim} 
            humidity={humidityVirtualBonfim}
            flameDetected={flameDetectedVirtualBonfim} />
          
          {/* {Cajazeiras} */}
          <WeatherCard 
            location={'Cajazeiras'}
            temperature={temperatureRealCajazeiras} 
            humidity={humidityRealCajazeiras}
            flameDetected={flameDetectedRealCajazeiras} />

          <WeatherCard 
            location={'Cajazeiras'}
            temperature={temperatureVirtualCajazeiras} 
            humidity={humidityVirtualCajazeiras}
            flameDetected={flameDetectedVirtualCajazeiras} />

        </MDBRow>
      </MDBContainer>   

      <Footer>
        <p>Developed by Living Lab - BA</p>
      </Footer>
    </>
  );
};

export default _Dashboard;

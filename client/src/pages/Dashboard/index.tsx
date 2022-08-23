import React, { useEffect, useState } from 'react';

/** useMatch - possui as informações da requisição */
import { useParams, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, InfoHeader, ContentTitle, Footer } from './styles';

interface Gateway {
  mac: string;
  ip: string;
  manufacturer: string;
  hostName: string;
  status: string;
  solution: string;
}

const Dashboard: React.FC = () => {
  const [gateways, setGateway] = useState<Gateway[]>([]);

  useEffect(() => {
    api.get('/m2fot/fot-gateway/').then(response => setGateway(response.data));
    // .catch(err => {
    //   console.error(`Communication failure ${err}`);
    // })

    // contar número de soluções
    // contar número de gateways
    // contar número de dispositivos
  }, []);

  const valuesSolutions = gateways.map(gateway => {
    return gateway.solution;
  });

  // const solutions = [...new Set(values)];

  // console.log(solutions);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
      </Header>

      <InfoHeader>
        <header>
          <div>
            <strong>M2 - Smart Cities</strong>
            <p>Smart Manager</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>-</strong>
            <span>Solutions</span>
          </li>
          <li>
            <strong>-</strong>
            <span>Gateways</span>
          </li>
          <li>
            <strong>-</strong>
            <span>Devices</span>
          </li>
        </ul>
      </InfoHeader>

      <ContentTitle>Solutions</ContentTitle>

      <Footer>
        <p>Developed by Wiser Research Group</p>
      </Footer>
    </>
  );
};

export default Dashboard;

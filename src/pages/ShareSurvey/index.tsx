import React, { useMemo } from 'react';
import { MdMail } from 'react-icons/md';
import { RiQrCodeLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';

import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';

import {
  Container,
  Header,
  LinkShare,
  ShareOptions,
  Separator,
  CardOption,
  Name,
  Titles,
  NavLink,
  ButtonMedia,
  ButtonCopy,
} from './styles';

import whatsapp from '../../assets/whatsapp_icon.png';
import facebook from '../../assets/facebook_icon.png';
import telegram from '../../assets/telegram_icon.png';
import twitter from '../../assets/twitter_icon.png';

const ShareSurvey: React.FC = () => {
  const surveyUrl = useMemo(() => {
    if (window) {
      const url = window.location.href.replace('share', 'survey');
      return url;
    }
    return '';
  }, []);

  return (
    <>
      <PageHeader />
      <Layout>
        <Container>
          <Header>
            <Titles>
              <span>Pesquisa Eleitoral de Lago Alegre</span>
              <nav>
                <NavLink href="/">Editar</NavLink>
                <NavLink isActive href="/share">
                  Compartilhar
                </NavLink>
                <NavLink href="/">Resultados</NavLink>
              </nav>
            </Titles>
            <LinkShare>
              <div>
                <p>Copie o link e envie-o para compartilhar a pesquisa</p>
                <div>
                  <input type="text" value={surveyUrl} />
                  <ButtonCopy>COPIAR</ButtonCopy>
                </div>
              </div>
              <Separator />
              <div>
                <p>
                  Clicando nos botões abaixo você pode compartilhar direto nas
                  redes sociais
                </p>
                <div>
                  <ButtonMedia type="button">
                    <img src={whatsapp} alt="Whatsapp Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={facebook} alt="Facebook Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={telegram} alt="Telegram Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={twitter} alt="Twitter Link" />
                  </ButtonMedia>
                </div>
              </div>
            </LinkShare>
          </Header>
          <ShareOptions>
            <button type="button">
              <CardOption gradientColor="180deg, #3475D2 0%, #3475D2 0.01%, #4E8DE6 100%">
                <MdMail />
              </CardOption>
              <Name fontColor="#3778D4">E-mail Lote</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
            <button type="button">
              <CardOption gradientColor="180deg, #C85C83 0%, #FF75A7 100%">
                <RiQrCodeLine />
              </CardOption>
              <Name fontColor="#C85C83">Qr Code</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
            <button type="button">
              <CardOption gradientColor="180deg, #E2846A 0%, #E2846A 0.01%, #FF9578 100%">
                <AiFillHtml5 />
              </CardOption>
              <Name fontColor="#EB8A6F">Incorporar</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
          </ShareOptions>
        </Container>
      </Layout>
    </>
  );
};

export default ShareSurvey;

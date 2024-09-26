import React from 'react';
import { BdsGrid, BdsIllustration, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';
import PassiveFeedback from '../wrappers/PassiveFeedback';

const data = {
  title: 'Resolução inteligente',
};

const Home = () => {
  const dataPassiveFeedBack = (ev: CustomEvent) => {
    console.log('Retorno da funcionalidade', ev.detail);
  };
  window.addEventListener('onLikeFeedback', () => console.log('onLikeFeedback'), false);
  window.addEventListener('onDisikeFeedback', () => console.log('onDisikeFeedback'), false);
  window.addEventListener('onSubmitFeedback', (ev) => dataPassiveFeedBack(ev as CustomEvent), false);
  return (
    <>
      <BdsGrid margin="y-4" container direction="column" gap="2">
        <BdsPaper class="w-100">
          <BdsGrid margin="y-3" padding="x-3" containerFluid align-items="center">
            <BdsGrid xxs="6" padding="x-6" direction="column">
              <BdsIllustration type="default" name="management" />
            </BdsGrid>
            <BdsGrid xxs="6" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Área de teste Uai Design System
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Aqui vamo aplicar todos os teste nos componentes. Você pode navegar no menu lateral para acessar os
                componentes.
              </BdsTypo>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
        <PassiveFeedback functionTitle={data.title}></PassiveFeedback>
      </BdsGrid>
    </>
  );
};
export default Home;

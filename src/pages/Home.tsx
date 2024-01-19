import React from 'react';
import { BdsIllustration, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Home = () => {
  return (
    <>
      <bds-grid margin="y-4" container>
        <bds-paper class="w-100">
          <bds-grid margin="y-3" padding="x-3" containerFluid align-items="center">
            <bds-grid xxs="6" padding="x-6" direction="column">
              <BdsIllustration type="default" name="management" />
            </bds-grid>
            <bds-grid xxs="6" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Área de teste Uai Design System
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Aqui vamo aplicar todos os teste nos componentes. Você pode navegar no menu lateral para acessar os
                componentes.
              </BdsTypo>
            </bds-grid>
          </bds-grid>
        </bds-paper>
      </bds-grid>
    </>
  );
};
export default Home;

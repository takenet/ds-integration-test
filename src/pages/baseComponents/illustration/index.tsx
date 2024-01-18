import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsIllustration } from 'blip-ds/dist/blip-ds-react/components';

const Illustration = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Illustration
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Componente disponível para uso de ilustrações em código, sem exportação ou upload de imagens.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsIllustration class="w-100" type="default" name="agent-1"></BdsIllustration>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Illustration;

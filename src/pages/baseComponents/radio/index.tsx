import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsRadio } from 'blip-ds/dist/blip-ds-react/components';

const Radio = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Radio
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os botões de opção permitem que o usuário selecione uma opção de um conjunto.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsRadio value="radio1" label="Radio 1"></BdsRadio>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Radio;

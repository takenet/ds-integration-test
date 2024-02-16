import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsRadioGroup, BdsRadio } from 'blip-ds/dist/blip-ds-react/components';

const RadioButton = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Radio Button
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os botões de opção permitem que o usuário selecione uma opção de um conjunto.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsRadioGroup>
                <BdsGrid direction="column" gap="1">
                  <BdsTypo bold="bold">Radio group</BdsTypo>
                  <BdsRadio id="6173-should" dataTest="open-radio-buttons" value="radio1" label="Radio 1"></BdsRadio>
                  <BdsRadio value="radio2" label="Radio 2"></BdsRadio>
                </BdsGrid>
              </BdsRadioGroup>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default RadioButton;

import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsInputChips } from 'blip-ds/dist/blip-ds-react/components';

const InputChips = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                InputChips
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsInputChips
                id="1628-input-chips"
                dtButtonClose="should-button-close"
                label="input chips"
                chips='["chip1", "chip2"]'
              ></BdsInputChips>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default InputChips;

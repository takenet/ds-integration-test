import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsInputPhoneNumber } from 'blip-ds/dist/blip-ds-react/components';

const InputPhoneNumber = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                InputPhoneNumber
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsInputPhoneNumber id="5478-input-phone-number" label="label do input" dataTest="should-input-phone-number" dtSelectFlag="should-select-flag"></BdsInputPhoneNumber>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default InputPhoneNumber;

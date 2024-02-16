import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsInputEditable } from 'blip-ds/dist/blip-ds-react/components';

const InputEditable = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                InputEditable
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsInputEditable
                id="7406-input-editable"
                dtButtonEdit="should-button-edit"
                dtButtonClose="should-button-close"
                dtButtonConfirm="should-button-confirm"
                value="Storybook"
              ></BdsInputEditable>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default InputEditable;

import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsCheckbox } from 'blip-ds/dist/blip-ds-react/components';

const Checkbox = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Checkbox
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O checkbox permite que o usuário selecione um ou mais itens de um conjunto. Podem ser usadas para ativar
                ou desativar uma opção.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsCheckbox
                id="2378-should"
                label="Selected"
                name="select"
                refer=""
                dataTest="should-checkbox"
              ></BdsCheckbox>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Checkbox;

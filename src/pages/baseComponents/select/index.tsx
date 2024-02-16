import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsSelect, BdsSelectOption } from 'blip-ds/dist/blip-ds-react/components';

const Select = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Select
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de
                opções.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsSelect id="9674-should" dataTest="open-select">
                <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
                <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
                <BdsSelectOption value="3">David Harbour</BdsSelectOption>
                <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
                <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
                <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
              </BdsSelect>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Select;

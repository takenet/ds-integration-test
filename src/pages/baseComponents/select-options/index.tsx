import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsSelectOption } from 'blip-ds/dist/blip-ds-react/components';

const SelectOptions = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Select Options
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os componentes de select são usados ​​para coletar informações fornecidas pelo usuário em uma lista de
                opções.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default SelectOptions;

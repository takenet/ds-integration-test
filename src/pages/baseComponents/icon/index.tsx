import React from 'react';

import { BdsGrid, BdsIcon, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Icon = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Icon
              </BdsTypo>
              <BdsTypo variant="fs-16">Orientação e sugestões para usar ícones com o BlipDS.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsIcon theme="outline" size="brand" name="info"></BdsIcon>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Icon;

import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Paper = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Paper
              </BdsTypo>
              <BdsTypo variant="fs-16">
                No BlipDS as propriedades físicas de um papel são traduzidas para a tela.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsPaper border={false} elevation="primary" height="100px" width="150px"></BdsPaper>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Paper;

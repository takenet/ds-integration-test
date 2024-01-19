import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsProgressBar } from 'blip-ds/dist/blip-ds-react/components';

const ProgressBar = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Progress Bar
              </BdsTypo>
              <BdsTypo variant="fs-16">Um progress bar mostra a quantidade de um processo.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsProgressBar size="default" text="Texto para aplicar no componente" percent={16}></BdsProgressBar>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default ProgressBar;

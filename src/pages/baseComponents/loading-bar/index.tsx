import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsLoadingBar } from 'blip-ds/dist/blip-ds-react/components';

const LoadingBar = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Loading Bar
              </BdsTypo>
              <BdsTypo variant="fs-16">Uma barra horizontal que indica o progresso da atividade realizada.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsLoadingBar id="7837-should" dataTest="open-loading-bar" size="default" percent={48}></BdsLoadingBar>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default LoadingBar;

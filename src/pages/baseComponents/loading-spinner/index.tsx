import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsLoadingSpinner } from 'blip-ds/dist/blip-ds-react/components';

const LoadingSpinner = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Loading Spinner
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O componente de loading ajuda a notificar o usuário que o carregamento está em andamento.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsLoadingSpinner
                id="3297-should"
                dataTest="open-loading-spinner"
                size="standard"
                color="main"
              ></BdsLoadingSpinner>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default LoadingSpinner;

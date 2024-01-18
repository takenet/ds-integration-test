import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const LoadingPage = () => {
  const showLoad = async () => {
    const renderLoadPage = document.createElement('bds-loading-page');
    document.body.appendChild(renderLoadPage);
  };
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Loading Page
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O componente de loading ajuda a notificar o usuário que o carregamento está em andamento.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButton variant="primary" size="standard" onBdsClick={() => showLoad()}>
                Abrir Load
              </BdsButton>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default LoadingPage;

import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsPagination } from 'blip-ds/dist/blip-ds-react/components';

const Pagination = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Pagination
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsPagination
                id="9164-pagination"
                dtButtonInitial="should-button-initial"
                dtButtonPrev="should-button-prev"
                dtSelectNumber="should-select-number"
                dtButtonNext="should-button-next"
                dtButtonEnd="should-button-end"
                started-page="20"
                pages={30}
              ></BdsPagination>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Pagination;

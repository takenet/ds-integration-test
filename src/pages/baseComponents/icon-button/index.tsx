import React from 'react';

import { BdsButtonIcon, BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const IconButton = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Icon Button
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Um elemento clicável que permite os usuários tomarem ações e decisões com um simples toque.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButtonIcon id="7945-should" dataTest="open-icon-button" icon="info"></BdsButtonIcon>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default IconButton;

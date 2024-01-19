import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsChipClickable } from 'blip-ds/dist/blip-ds-react/components';

const ChipClickable = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Chip Clickable
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando palavras-chave que os descrevam.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsChipClickable color="default" icon="" avatar="" clickable={false} close={false} disabled={false} size="tall">
                Chip-clickable Default
              </BdsChipClickable>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default ChipClickable;

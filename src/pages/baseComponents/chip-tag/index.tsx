import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsChipTag } from 'blip-ds/dist/blip-ds-react/components';

const ChipTag = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Chip Tag
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Os chips são usados para itens que precisam ser rotulados, categorizados ou organizados, usando
                palavras-chave que os descrevam.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsChipTag id="9821-should" dataTest="open-chip-tag" color="default" icon="">
                Chip-tag Default
              </BdsChipTag>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default ChipTag;

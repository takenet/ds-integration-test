import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsChipClickable } from 'blip-ds/dist/blip-ds-react/components';

const ChipClickableClose = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                ChipClickableClose
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsChipClickable
                id="4396-chip-close"
                dtButtonClose="should-button-close"
                color="default"
                icon=""
                avatar=""
                clickable={true}
                close={true}
                disabled={false}
                size="tall"
              >
                Chip-clickable Default
              </BdsChipClickable>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default ChipClickableClose;

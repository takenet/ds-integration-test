import React from 'react';
import { BdsGrid, BdsPaper, BdsSkeleton, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Skeleton = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Skeleton
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O componente Skeleton comunica que os dados em determinados elementos da tela estão sendo carregados e
                que a tela não está congelada.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsSkeleton
                id="4697-skeleton"
                shape="square"
                width="300px"
                height="100px"
                dataTest="should-skeleton"
              ></BdsSkeleton>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Skeleton;

import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Typo = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Typo
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O BlipDS inclui uma variedade de escalas e tipos de textos que atendem as necessidades do produto.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="6" margin="y-2" direction="column">
              <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                Texto para teste do typo.
              </BdsTypo>
              <BdsGrid>
                <ul>
                  <li>
                    <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </BdsTypo>
                  </li>
                  <li>
                    <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                      Ut justo mauris, congue tempus consectetur a, tincidunt non erat.
                    </BdsTypo>
                  </li>
                  <li>
                    <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                      Suspendisse et vehicula urna. Maecenas mi lectus, pellentesque vitae tempor nec, volutpat eu sem.
                    </BdsTypo>
                  </li>
                  <li>
                    <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                      Nunc eu eros lectus. Cras et lorem in orci semper tincidunt vehicula malesuada est.
                    </BdsTypo>
                  </li>
                  <li>
                    <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                      In mattis luctus lectus, id hendrerit tortor elementum a.
                    </BdsTypo>
                  </li>
                </ul>
              </BdsGrid>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Typo;

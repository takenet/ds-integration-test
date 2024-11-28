import React from 'react';
import {
  BdsAccordion,
  BdsAccordionBody,
  BdsAccordionHeader,
  BdsPaper,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';

const Accordion = () => {
  return (
    <>
      <bds-grid margin="y-4" container>
        <BdsPaper class="w-100">
          <bds-grid flex-wrap="wrap" margin="y-4" padding="x-3">
            <bds-grid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Accordion
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de
                conteúdo associadas.
              </BdsTypo>
            </bds-grid>
            <bds-grid xxs="12" margin="y-2" direction="column">
              <BdsAccordion>
                <BdsAccordionHeader
                  id="5498-accordion-header"
                  accordionTitle="Título do accordion"
                  avatarName=""
                  avatarThumb=""
                  icon=""
                  dataTest="accordion-header"
                />
                <BdsAccordionBody id="3287-accordion-body" dataTest="accordion-body">
                  <BdsTypo variant="fs-16">
                    Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de
                    conteúdo associados.
                  </BdsTypo>
                </BdsAccordionBody>
              </BdsAccordion>
            </bds-grid>
          </bds-grid>
        </BdsPaper>
      </bds-grid>
    </>
  );
};
export default Accordion;

import React from 'react';
import {
  BdsAccordion,
  BdsAccordionBody,
  BdsAccordionGroup,
  BdsAccordionHeader,
  BdsGrid,
  BdsPaper,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';

const Accordion = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Accordion
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de
                conteúdo associadas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsAccordionGroup collapse="single">
                <BdsAccordion startOpen>
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
              </BdsAccordionGroup>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Accordion;

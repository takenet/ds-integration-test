import React, { useRef } from 'react';
import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsTable,
  BdsTableHeader,
  BdsTableRow,
  BdsTableTh,
  BdsTableCell,
  BdsTableBody,
  BdsAccordionBody,
  BdsButtonIcon,
} from 'blip-ds/dist/blip-ds-react/components';

const DATA = [
  {
    id: 1,
    produto: 'Celular',
    valor: '1500,00',
    disponibilidade: 'disponivel',
    detalhes: {
      marca: 'sangsung',
      modelo: 'S3',
      cor: 'Preto',
      data: '12/02/2012',
    },
  },
  {
    id: 2,
    produto: 'Notebook',
    valor: '4000,00',
    disponibilidade: 'indisponivel',
    detalhes: {
      marca: 'Lenovo',
      modelo: 'ThinkPad',
      cor: 'Preto',
      data: '20/04/2018',
    },
  },
  {
    id: 3,
    produto: 'Livros',
    valor: '60,00',
    disponibilidade: 'disponivel',
    detalhes: {
      marca: 'Panini',
      modelo: 'Album da copa',
      cor: 'Variado',
      data: '15/10/2022',
    },
  },
];
const heading = ['detalhes', 'id', 'Produtos', 'Valor', 'Disponibilidade'];

const Table = () => {
  const tableBodyElement = useRef<HTMLBdsTableBodyElement | null>(null);
  const toggleBody = (index: number) => {
    const allAccordion = tableBodyElement?.current?.getElementsByTagName(
      'bds-accordion-body'
    ) as HTMLCollectionOf<HTMLBdsAccordionBodyElement>;
    allAccordion[index].toggle();
  };
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Table
              </BdsTypo>
              <BdsTypo variant="fs-16">Use para listar ou editar conteúdos com muitas informações agregadas.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTable>
                <BdsTableHeader>
                  <BdsTableRow>
                    {heading.map((item, index) => {
                      return <BdsTableTh key={index}>{item}</BdsTableTh>;
                    })}
                  </BdsTableRow>
                </BdsTableHeader>
                <BdsTableBody ref={tableBodyElement}>
                  {DATA.map((row, index) => {
                    return (
                      <>
                        <BdsTableRow>
                          <BdsTableCell>
                            <BdsButtonIcon
                              size="short"
                              variant="secondary"
                              icon="arrow-down"
                              onClick={() => toggleBody(index)}
                            ></BdsButtonIcon>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo variant="fs-14" bold={'semi-bold'}>
                              {row.id}
                            </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo variant="fs-14" bold={'semi-bold'}>
                              {row.produto}
                            </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo variant="fs-14" bold={'semi-bold'}>
                              {row.valor}
                            </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell type="custom">
                            {row.disponibilidade === 'disponivel' ? (
                              <bds-chip-tag color="success">{row.disponibilidade}</bds-chip-tag>
                            ) : (
                              <bds-chip-tag color="danger">{row.disponibilidade}</bds-chip-tag>
                            )}
                          </BdsTableCell>
                        </BdsTableRow>
                        <BdsAccordionBody key={index}>
                          <BdsTableCell>
                            <BdsTypo> Detalhe </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo> Detalhe </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo> Detalhe </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo> Detalhe </BdsTypo>
                          </BdsTableCell>
                          <BdsTableCell>
                            <BdsTypo> Detalhe </BdsTypo>
                          </BdsTableCell>
                        </BdsAccordionBody>
                      </>
                    );
                  })}
                </BdsTableBody>
              </BdsTable>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Table;

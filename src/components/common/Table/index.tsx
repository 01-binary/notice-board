import React, { FC } from 'react';
import * as S from './style';

interface Column {
  title: string;
  key: string;
}

interface Props {
  data: object[];
  columns: Column[];
  onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

const Table: FC<Props> = ({ data, columns, onClick }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              const { title, key } = column;
              return <S.TH key={key}>{title}</S.TH>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((value: any, index: number) => {
            console.log(value);
            return (
              <S.HoverableTR key={index} onClick={onClick}>
                {Object.values(value).map((content, innerIndex) => {
                  return (
                    <S.TD key={`${index}_${innerIndex}`}>{content as string}</S.TD>
                  );
                })}
              </S.HoverableTR>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

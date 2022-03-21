import React, { FC } from 'react';
import * as S from './style';

interface Column {
  title: string;
  key: string;
}

interface Props {
  data: object[];
  columns: Column[];
}

const Table: FC<Props> = ({ data, columns }) => {
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
            const { id } = value;
            return (
              <S.HoverableTR
                key={index}
                onClick={() => {
                  alert(id);
                }}
              >
                {Object.values(value).map((content) => {
                  return (
                    <S.TD key={content as string}>{content as string}</S.TD>
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

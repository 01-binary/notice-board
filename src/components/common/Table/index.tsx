import React, { FC } from 'react';

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
              return <th key={key}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((value: object, index: number) => {
            console.log(value);
            return (
              <tr key={index}>
                {Object.values(value).map((content) => {
                  return <td key={content}>{content}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

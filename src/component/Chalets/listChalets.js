import React from 'react';
import ChaletCard from './cardChalet';

const ChaletList = ({ chalets }) => {
  return (
    <div className="chalet-list">
      {chalets.map((chalet, index) => (
        <ChaletCard key={index} chalet={chalet} />
      ))}
    </div>
  );
};

export default ChaletList;
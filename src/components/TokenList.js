import Erc721 from './Erc721';

function TokenList({ erc721list }) {
  return (
    <div className="tokenlist">
      <Erc721 erc721list={erc721list} />
    </div>
  );
}

export default TokenList;

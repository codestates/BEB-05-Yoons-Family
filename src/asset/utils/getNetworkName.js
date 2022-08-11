export const getNetworkName = (networkId) => {
  const networkMapping = {
    1: 'Ethereum Main Network',
    3: 'Ropsten Test Network',
    42: 'Kovan Test Network',
    4: 'Rinkeby Test Network',
    5: 'Georli Test Network',
  };
  return networkMapping[networkId];
};

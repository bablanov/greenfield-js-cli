const {provider} = require("../../methods");

const getProviders = async () => {
  const result = await provider.getProviders();

  console.info(result.msg);
  console.info(result.data);
};

const getProviderPrice = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await provider.getProviderPrice(flags.address);

  console.info(result.msg);
  console.info(result.data);
};

const getSpecificProvider = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await provider.getSpecificProvider(flags.address);

  console.info(result.msg);
  console.info(result.data);
};

module.exports = {
  getProviders,
  getSpecificProvider,
  getProviderPrice,
}